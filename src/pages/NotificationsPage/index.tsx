import { FC } from 'react';

import NotificationsBlock from './components/NotificationsBlock';

import Header from '@/components/Header';

const NotificationsPage: FC = () => {
  return (
    <>
      <Header pageName='Notifications' />
      <NotificationsBlock />
    </>
  );
};

export default NotificationsPage;
