import { useRef, useState } from 'react';

import { MAX_WEIGHT } from '@/constants/numbers';

interface UseCalculateWeightHook {
  weight: number;
  isDisabled: boolean;
  calculateWeight: () => void;
  inputRef: React.RefObject<HTMLDivElement>;
}

export const useCalculateWeight = (): UseCalculateWeightHook => {
  const [weight, setWeight] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const inputRef = useRef<HTMLDivElement>(null);

  const calculateWeight = (): void => {
    let weightAmount = 0;
    let hasEmptyInput = false;

    if (inputRef.current) {
      inputRef.current
        .querySelectorAll<HTMLInputElement>('.MuiInputBase-input')
        .forEach((input) => {
          if (+input.value === 0) {
            hasEmptyInput = true;
          }
          weightAmount += +input.value;
        });
    }

    setWeight(weightAmount);

    if (weightAmount <= MAX_WEIGHT && !hasEmptyInput) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return { weight, isDisabled, calculateWeight, inputRef };
};
