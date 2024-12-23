import { FC } from 'react';

import { Box } from '@mui/material';

import MapPinNotification from './components/MapPinNotification';

const NotificationsBlock: FC = () => {
  return (
    <Box sx={{ marginTop: '87px' }}>
      <MapPinNotification routeId='9' timeDifference='1h' />
    </Box>
  );
};

export default NotificationsBlock;
