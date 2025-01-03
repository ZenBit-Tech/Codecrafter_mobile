import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  notificationContainer,
  notificationTitle,
  textContainer,
  timeDifferenceTextStyles,
} from './styles';

import luggageNotification from '@/assets/icons/luggage-notification.svg';
import { setCurrentRouteId } from '@/redux/slices/routeSlice';

interface LuggageNotificationProps {
  routeId: string;
  routeHref: string;
  shouldBeStarted: string;
  timeDifference: string;
}

const LuggageNotification: FC<LuggageNotificationProps> = ({
  routeId,
  routeHref,
  shouldBeStarted,
  timeDifference,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={notificationContainer}>
      <img src={luggageNotification} alt='notificationIcon' />
      <Box sx={textContainer}>
        <Typography sx={notificationTitle}>
          {t('The route ')}
          <Typography
            className='blackLink'
            onClick={() => {
              dispatch(setCurrentRouteId(+routeHref));
              navigate('/app/map/');
            }}
          >
            #{routeId}
          </Typography>
          {t('should be started at ')} {shouldBeStarted}
        </Typography>
        <Typography sx={timeDifferenceTextStyles}>{timeDifference}</Typography>
      </Box>
    </Box>
  );
};

export default LuggageNotification;
