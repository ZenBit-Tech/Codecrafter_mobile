import { FC } from 'react';

import { t } from 'i18next';

import { ActionBtns } from './components/ActionBtns';
import { CheckBaggageBlock } from './components/CheckBaggageBlock';

import Header from '@/components/Header';

export const BaggageCheckPage: FC = () => {
  return (
    <>
      <Header pageName={t('Baggage check')} hasBackIcon />
      <CheckBaggageBlock />
      <ActionBtns />
    </>
  );
};
