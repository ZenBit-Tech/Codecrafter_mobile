import { FC } from 'react';

import { CheckList } from './components/CheckList';

import Header from '@/components/Header';
import { useAppSelector } from '@/redux/hooks';

export const PreArrivalPage: FC = () => {
  const { user } = useAppSelector((store) => store.auth);

  return (
    <>
      <Header
        hasBackIcon
        pageName='Pre-Arrival'
        username={user?.full_name || ''}
      />
      <CheckList />
    </>
  );
};
