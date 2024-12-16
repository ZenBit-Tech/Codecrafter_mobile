import { FC, useState } from 'react';

import { t } from 'i18next';

import { ActionBtns } from './components/ActionBtns';
import { CustomerInformBlock } from './components/CustomerInformBlock';

import Header from '@/components/Header';
import { useAppSelector } from '@/redux/hooks';

export const IdentityVerification: FC = () => {
  const [disabled, setIsDisabled] = useState<boolean>(false);
  const { user } = useAppSelector((store) => store.auth);

  return (
    <>
      <Header
        hasBackIcon
        pageName={t('boardingPass.titles.identityVerification')}
        username={user?.full_name || ''}
      />
      <CustomerInformBlock handleChoose={setIsDisabled} />
      <ActionBtns isNextBtnDisabled={disabled} />
    </>
  );
};
