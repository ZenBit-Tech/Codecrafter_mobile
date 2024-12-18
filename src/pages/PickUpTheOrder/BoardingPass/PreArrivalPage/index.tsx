import { FC } from 'react';

import { ActionBtns } from './components/ActionBtns';
import { CheckList } from './components/CheckList';

import Header from '@/components/Header';

export const PreArrivalPage: FC = () => {

  return (
    <>
      <Header hasBackIcon pageName='Pre-Arrival' />
      <CheckList />
      <ActionBtns />
    </>
  );
};
