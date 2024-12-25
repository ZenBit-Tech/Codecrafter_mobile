import { FC } from 'react';

import { t } from 'i18next';

import NotificationsBlock from './components/NotificationsBlock';

import Header from '@/components/Header';

const NotificationsPage: FC = () => {
  return (
    <>
      <Header pageName={t('Notifications')} />
      <NotificationsBlock />
    </>
  );
};

export default NotificationsPage;
