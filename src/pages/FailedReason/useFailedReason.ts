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
import { UseFailedReasonReturn } from '@/interfaces/FailedReason';

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
