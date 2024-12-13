import { FC } from 'react';

import { ActionBtns } from './components/ActionBtns';
import { BoardingPassInformBlock } from './components/BoardingPassInformBlock';

import Header from '@/components/Header';
import { useAppSelector } from '@/redux/hooks';

export const BoardingPassVerificationPage: FC = () => {
  const { user } = useAppSelector((store) => store.auth);

  return (
    <>
      {' '}
      <Header
        hasBackIcon
        pageName='Boarding pass Verification '
        username={user?.full_name || ''}
      />
      <BoardingPassInformBlock
        customerName='John Doe'
        departureDate='01.02.2022'
        departureTime='02:00'
        airport='Dusseldorf'
        flightNumber='X324dA'
      />
      <ActionBtns />
    </>
  );
};