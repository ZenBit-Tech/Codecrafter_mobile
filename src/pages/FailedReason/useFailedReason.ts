import { useState } from 'react';

import { t } from 'i18next';
import { useForm } from 'react-hook-form';

import { maxLetters, minLetters, tBase } from '@/constants/constants';
import { UseFailedReasonReturn } from '@/interfaces/FailedReason';

interface FailedReasonForm {
  customReason: string;
}

const useFailedReason = (): UseFailedReasonReturn => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
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

  return {
    selectedReason,
    customReason,
    register,
    handleSubmit,
    errors,
    isSendDisabled,
    handleReasonClick,
    handleCancel,
    validationRules,
  };
};

export default useFailedReason;
