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

import notificationIcon from '@/assets/icons/route-notificaton.svg';
import { setCurrentRouteId } from '@/redux/slices/routeSlice';

interface RouteNotificationProps {
  routeId: string;
  routeHref: string;
  timeDifference: string;
}

const RouteNotification: FC<RouteNotificationProps> = ({
  routeId,
  routeHref,
  timeDifference,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={notificationContainer}>
      <img src={notificationIcon} alt='notificationIcon' />
      <Box sx={textContainer}>
        <Typography sx={notificationTitle}>
          {t('You have received new route ')}
          <Typography
            className='blackLink'
            onClick={() => {
              dispatch(setCurrentRouteId(+routeHref));
              navigate('/app/map/');
            }}
          >
            #{routeId}
          </Typography>
        </Typography>
        <Typography sx={timeDifferenceTextStyles}>{timeDifference}</Typography>
      </Box>
    </Box>
  );
};

export default RouteNotification;
