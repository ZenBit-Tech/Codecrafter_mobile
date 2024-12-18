import { FC, useState } from 'react';

import { t } from 'i18next';

import { ActionBtns } from './components/ActionBtns';
import { CustomerInformBlock } from './components/CustomerInformBlock';

import Header from '@/components/Header';

export const IdentityVerification: FC = () => {
  const [disabled, setIsDisabled] = useState<boolean>(false);

  return (
    <>
      <Header
        hasBackIcon
        pageName={t('boardingPass.titles.identityVerification')}
      />
      <CustomerInformBlock handleChoose={setIsDisabled} />
      <ActionBtns isNextBtnDisabled={disabled} />
    </>
  );
};
