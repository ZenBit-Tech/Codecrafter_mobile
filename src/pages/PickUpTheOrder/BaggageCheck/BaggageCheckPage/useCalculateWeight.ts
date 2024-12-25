import { useState } from 'react';

import { MAX_WEIGHT } from '@/constants/numbers';

interface UseCalculateWeightHook {
  weight: number;
  isDisabled: boolean;
  calculateWeight: () => void;
}

export const useCalculateWeight = (): UseCalculateWeightHook => {
  const [weight, setWeight] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const calculateWeight = (): void => {
    let weightAmount = 0;
    let hasEmptyInput = false;

    document
      .querySelectorAll('.MuiInputBase-input')
      .forEach((input: HTMLInputElement) => {
        if (+input.value === 0) {
          hasEmptyInput = true;
        }

        weightAmount += +input.value;
      });

    setWeight(weightAmount);

    if (weightAmount <= MAX_WEIGHT) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    if (hasEmptyInput) {
      setIsDisabled(true);
    }
  };

  return { weight, isDisabled, calculateWeight };
};
