import { t } from 'i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { UseFailedReasonReturn } from '@/interfaces/FailedReason';

const useFailedReason = (): UseFailedReasonReturn => {
  const tBase = 'failReason';
  const minLetters = 10;
  const maxLetters = 5000;

  const reasonNotAvailable = t(`${tBase}.reasons.notAvailable`);
  const reasonBagsNotReady = t(`${tBase}.reasons.bagsNotReady`);
  const reasonOther = t(`${tBase}.reasons.other`);

  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
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
    tBase,
    reasonNotAvailable,
    reasonBagsNotReady,
    reasonOther,
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
