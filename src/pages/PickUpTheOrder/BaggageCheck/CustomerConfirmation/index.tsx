import { FC } from 'react';

import { t } from 'i18next';

import { ActionBtns } from './components/ActionBtns';
import { CustomerConfirmationBlock } from './components/CustomerConfirmationBlock';
import { useCustomerConfirm } from './useCustomerConfirm';

import Header from '@/components/Header';

export const CustomerConfirmationPage: FC = () => {
  const {
    handleRemove,
    handleChangeCustomerFullName,
    isVisible,
    handleCreateSign,
    handleSignatureChange,
  } = useCustomerConfirm();

  return (
    <>
      <Header pageName={t('Customer confirmation  ')} hasBackIcon />
      <CustomerConfirmationBlock
        handleRemove={handleRemove}
        handleCreateSign={handleCreateSign}
        handleChangeCustomerFullName={handleChangeCustomerFullName}
        handleSignatureChange={handleSignatureChange}
      />
      <ActionBtns isVisible={isVisible} />
    </>
  );
};
