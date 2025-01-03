import { useState } from 'react';

import axios from 'axios';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { sendFailedReasonMessage } from '@/api/orderActions';
import {
  maxLetters,
  minLetters,
  reasonOther,
  tBase,
} from '@/constants/constants';
import { PREVIOUS_PAGE } from '@/constants/numbers';
import { Order, UseFailedReasonReturn } from '@/interfaces/FailedReason';
import axiosInstance from '@/utils/axiosInstance';

interface FailedReasonForm {
  customReason: string;
}

const useFailedReason = (orderId: number): UseFailedReasonReturn => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    handleSubmit,
  } = useForm<FailedReasonForm>({
    defaultValues: { customReason: '' },
  });

  const customReason = watch('customReason');

  const handleReasonClick = (reason: string): void => {
    setSelectedReason(reason);
    if (reason !== t(reasonOther)) {
      setValue('customReason', '');
    }
  };

  const handleCancel = (): void => {
    setSelectedReason(null);
    setValue('customReason', '');
    navigate(PREVIOUS_PAGE);
  };

  const isSendDisabled = !(
    selectedReason &&
    (selectedReason !== t(reasonOther) ||
      (customReason && customReason.length >= minLetters))
  );

  const validationRules = {
    required: t(`${tBase}.reasons.required`),
    minLength: {
      value: minLetters,
      message: t(`${tBase}.reasons.minLength`, { minLetters }),
    },
    maxLength: {
      value: maxLetters,
      message: t(`${tBase}.reasons.maxLength`, { maxLetters }),
    },
  };

  const onSubmit = async (): Promise<void> => {
    try {
      const reason =
        selectedReason === t(reasonOther) && customReason
          ? customReason
          : selectedReason || '';

      const payload = {
        orderId,
        reason,
      };

      await sendFailedReasonMessage(payload)();

      const response = await axiosInstance.get<Order[]>(
        `/orders/route/${orderId}`
      );
      const orders = response.data;

      const currentOrder = orders.find((order) => order.id === orderId);

      if (!currentOrder) {
        throw new Error('Current order not found');
      }

      const currentOrderTime = new Date(currentOrder.collection_time_start);

      const futureOrder = orders
        .filter(
          (order) => new Date(order.collection_time_start) > currentOrderTime
        )
        .sort(
          (a, b) =>
            new Date(a.collection_time_start).getTime() -
            new Date(b.collection_time_start).getTime()
        )[0];

      if (futureOrder) {
        navigate(`/app/orders/${futureOrder.id}`);

        return;
      }

      navigate('/app/map');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  };

  return {
    selectedReason,
    customReason,
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSendDisabled,
    handleReasonClick,
    handleCancel,
    validationRules,
  };
};

export default useFailedReason;
