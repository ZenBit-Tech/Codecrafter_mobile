import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import {
  notificationContainer,
  notificationTitle,
  textContainer,
  timeDifferenceTextStyles,
} from './styles';

import bellNotification from '@/assets/icons/bell-notification.svg';

interface BellNotificationProps {
  timeDifference: string;
}

const BellNotification: FC<BellNotificationProps> = ({ timeDifference }) => {
  return (
    <Box sx={notificationContainer}>
      <img src={bellNotification} alt='notificationIcon' />
      <Box sx={textContainer}>
        <Typography sx={notificationTitle}>
          You have received a note to the order
        </Typography>
        <Typography sx={timeDifferenceTextStyles}>{timeDifference}</Typography>
      </Box>
    </Box>
  );
};

export default BellNotification;
