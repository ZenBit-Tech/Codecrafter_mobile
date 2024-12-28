import { FC } from 'react';

import { t } from 'i18next';

import { ActionBtns } from './components/ActionBtns';
import { CheckBaggageBlock } from './components/CheckBaggageBlock';
import { useCalculateWeight } from './useCalculateWeight';

import Header from '@/components/Header';

export const BaggageCheckPage: FC = () => {
  const { weight, isDisabled, calculateWeight, inputRef } =
    useCalculateWeight();

  return (
    <>
      <Header pageName={t('Baggage check')} hasBackIcon />
      <CheckBaggageBlock
        calculateWeight={calculateWeight}
        weight={weight}
        inputRef={inputRef}
      />
      <ActionBtns isDisabled={isDisabled} />
    </>
  );
};
