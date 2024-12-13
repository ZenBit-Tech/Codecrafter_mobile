import { FC } from 'react';

import { ActionBtns } from './components/ActionBtns';
import { CustomerInformBlock } from './components/CustomerInformBlock';

import Header from '@/components/Header';
import { useAppSelector } from '@/redux/hooks';

export const IdentityVerification: FC = () => {
  const { user } = useAppSelector((store) => store.auth);

  return (
    <>
      <Header
        hasBackIcon
        pageName='Identity Verification'
        username={user?.full_name || ''}
      />
      <CustomerInformBlock />
      <ActionBtns />
    </>
  );
};
