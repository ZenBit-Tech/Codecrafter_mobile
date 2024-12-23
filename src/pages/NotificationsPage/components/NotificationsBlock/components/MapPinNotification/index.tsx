import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import {
  notificationContainer,
  notificationTitle,
  textContainer,
  timeDifferenceTextStyles,
} from './styles';

import notificationIcon from '@/assets/icons/map-pin.svg';

interface MapPinNotificationProps {
  routeId: string;
  timeDifference: string;
}

const MapPinNotification: FC<MapPinNotificationProps> = ({
  routeId,
  timeDifference,
}) => {
  return (
    <Box sx={notificationContainer}>
      <img src={notificationIcon} alt='notificationIcon' />
      <Box sx={textContainer}>
        <Typography sx={notificationTitle}>
          You have received new route{' '}
          <Link className='blackLink' to={`/routes/${routeId}`}>
            #{routeId}
          </Link>
        </Typography>
        <Typography sx={timeDifferenceTextStyles}>
          {timeDifference} ago
        </Typography>
      </Box>
    </Box>
  );
};

export default MapPinNotification;