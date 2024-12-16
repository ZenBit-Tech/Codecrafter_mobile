import { useState } from 'react';

import axios from 'axios';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';

import { createNotification } from '@/api/notificationActions';
import {
  maxLetters,
  minLetters,
  NOTIFICATION_TYPE,
  tBase,
} from '@/constants/constants';
import { UseFailedReasonReturn } from '@/interfaces/FailedReason';
import { useAppSelector } from '@/redux/hooks';

interface FailedReasonForm {
  customReason: string;
}

const useFailedReason = (): UseFailedReasonReturn => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const user = useAppSelector((state) => state.auth.user);

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
    setValue('customReason', '');
  };

  const handleCancel = (): void => {
    setSelectedReason(null);
    setValue('customReason', '');
  };

  const isSendDisabled = !(
    selectedReason ||
    (customReason && customReason.length >= minLetters)
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
      const message =
        selectedReason === 'reasonOther' && customReason
          ? customReason
          : selectedReason || '';

      const payload = {
        type: NOTIFICATION_TYPE,
        link_text: t('notifications.linkText'),
        link_href: `/app/map/${user?.id}`,
        message: t(message),
        userId: user?.id,
      };

      await createNotification(payload)();
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
