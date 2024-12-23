import { FC } from 'react';

import { Box } from '@mui/material';

import BellNotification from './components/BellNotification';
import LuggageNotification from './components/LuggageNotification';
import MapPinNotification from './components/MapPinNotification';
import RouteNotification from './components/RouteNotification';

const NotificationsBlock: FC = () => {
  return (
    <Box sx={{ marginTop: '87px' }}>
      <MapPinNotification routeId='9' timeDifference='1h' />
      <LuggageNotification
        routeId='9'
        shouldBeStarted='10:00'
        timeDifference='1h'
      />
      <BellNotification timeDifference='1h' />
      <RouteNotification routeId='9' timeDifference='1h' />
    </Box>
  );
};

export default NotificationsBlock;
