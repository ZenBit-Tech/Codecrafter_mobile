import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import {
  notificationContainer,
  notificationTitle,
  textContainer,
  timeDifferenceTextStyles,
} from './styles';

import luggageNotification from '@/assets/icons/luggage-notification.svg';

interface LuggageNotificationProps {
  routeId: string;
  shouldBeStarted: string;
  timeDifference: string;
}

const LuggageNotification: FC<LuggageNotificationProps> = ({
  routeId,
  shouldBeStarted,
  timeDifference,
}) => {
  return (
    <Box sx={notificationContainer}>
      <img src={luggageNotification} alt='notificationIcon' />
      <Box sx={textContainer}>
        <Typography sx={notificationTitle}>
          The route{' '}
          <Link className='blackLink' to={`/routes/${routeId}`}>
            #{routeId}
          </Link>{' '}
          should be started at {shouldBeStarted}
        </Typography>
        <Typography sx={timeDifferenceTextStyles}>
          {timeDifference} ago
        </Typography>
      </Box>
    </Box>
  );
};

export default LuggageNotification;
