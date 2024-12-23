import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import {
  notificationContainer,
  notificationTitle,
  textContainer,
  timeDifferenceTextStyles,
} from './styles';

import notificationIcon from '@/assets/icons/route-notificaton.svg';

interface RouteNotificationProps {
  routeId: string;
  timeDifference: string;
}

const RouteNotification: FC<RouteNotificationProps> = ({
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
        <Typography sx={timeDifferenceTextStyles}>{timeDifference}</Typography>
      </Box>
    </Box>
  );
};

export default RouteNotification;
