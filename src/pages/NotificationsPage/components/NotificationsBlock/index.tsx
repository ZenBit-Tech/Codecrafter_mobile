import { FC } from 'react';

import { Box } from '@mui/material';
import { t } from 'i18next';

import ListOfNotes from './components/ListOfNotes';
import NotificationsGroup from './components/NotificationsGroup';
import { notificationBlock } from './styles';
import { useGetNotifications } from './useGetNotifications';

const NotificationsBlock: FC = () => {
  const { notifications } = useGetNotifications();

  return (
    <Box sx={notificationBlock}>
      {notifications !== null && (
        <>
          {notifications.today.length > 0 && (
            <NotificationsGroup
              title={t('Today')}
              notifications={
                <ListOfNotes notifications={notifications.today} />
              }
            />
          )}
          {notifications.yesterday.length > 0 && (
            <NotificationsGroup
              title={t('Yesterday')}
              notifications={
                <ListOfNotes notifications={notifications.yesterday} />
              }
            />
          )}
          {notifications.thisMonth.length > 0 && (
            <NotificationsGroup
              title={t('This Moth')}
              notifications={
                <ListOfNotes notifications={notifications.thisMonth} />
              }
            />
          )}
          {notifications.thisYear.length > 0 && (
            <NotificationsGroup
              title={t('This Year')}
              notifications={
                <ListOfNotes notifications={notifications.thisYear} />
              }
            />
          )}
        </>
      )}
    </Box>
  );
};

export default NotificationsBlock;
