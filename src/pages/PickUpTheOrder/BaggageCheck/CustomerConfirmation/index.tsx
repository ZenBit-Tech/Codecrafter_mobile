import { FC } from 'react';

import { t } from 'i18next';

import { ActionBtns } from './components/ActionBtns';
import { CustomerConfirmationBlock } from './components/CustomerConfirmationBlock';

import Header from '@/components/Header';

export const CustomerConfirmationPage: FC = () => {
  return (
    <>
      <Header pageName={t('Customer confirmation  ')} hasBackIcon />
      <CustomerConfirmationBlock />
      <ActionBtns />
    </>
  );
};
