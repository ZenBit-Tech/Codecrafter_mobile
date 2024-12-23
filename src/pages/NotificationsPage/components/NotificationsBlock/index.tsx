import { FC } from 'react';

import { Box } from '@mui/material';

import ListOfNotes from './components/ListOfNotes';
import NotificationsGroup from './components/NotificationsGroup';
import { useGetNotifications } from './useGetNotifications';

const NotificationsBlock: FC = () => {
  const { notifications } = useGetNotifications();

  return (
    <Box
      sx={{
        marginTop: '87px',
        height: '90vh',
        overflow: 'scroll',
        paddingBottom: '150px',
      }}
    >
      {notifications !== null && (
        <>
          {notifications.today.length > 0 && (
            <NotificationsGroup
              title='Today'
              notifications={
                <ListOfNotes notifications={notifications.today} />
              }
            />
          )}
          {notifications.yesterday.length > 0 && (
            <NotificationsGroup
              title='Yesterday'
              notifications={
                <ListOfNotes notifications={notifications.yesterday} />
              }
            />
          )}
          {notifications.thisMonth.length > 0 && (
            <NotificationsGroup
              title='This Moth'
              notifications={
                <ListOfNotes notifications={notifications.thisMonth} />
              }
            />
          )}
          {notifications.thisYear.length > 0 && (
            <NotificationsGroup
              title='This Year'
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
