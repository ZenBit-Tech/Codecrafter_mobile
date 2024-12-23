import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { notificationContainer } from './styles';

import notificationIcon from '@/assets/icons/map-pin.svg';
import { COLORS } from '@/constants/colors';

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
      <Box sx={{ marginLeft: '14px' }}>
        <Typography sx={{ color: COLORS.black }}>
          You have received new route{' '}
          <Link className='blackLink' to={`/routes/${routeId}`}>
            #{routeId}
          </Link>
        </Typography>
        <Typography sx={{ color: COLORS.schemes.secondary }}>
          {timeDifference} ago
        </Typography>
      </Box>
    </Box>
  );
};

export default MapPinNotification;
