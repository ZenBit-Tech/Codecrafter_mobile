import { Typography } from '@mui/material';
import { format } from 'date-fns';
import { t } from 'i18next';
import { FC } from 'react';

import {
  StyledRouteInfo,
  StyledRouteInfoItem,
  StyledRouteItem,
} from './styles';

import { COLORS } from '@/constants/colors';
import { SHORT_MONTH } from '@/constants/dateFormats';
import { StatusEnum } from '@/constants/status';
import StatusComponent from '@/pages/RoutesPage/components/StatusComponent';
import { addPadding } from '@/utils/stringUtils';

interface RouteItemProps {
  routeId: number;
  routeDate: Date;
  distance: number;
  routeTime: {
    submissionDate: Date;
    arrivalDate: Date;
  };
  status: StatusEnum;
}

const RouteItem: FC<RouteItemProps> = ({
  routeId,
  routeDate,
  distance,
  routeTime,
  status,
}) => {
  const idPadding = 6;
  const timePadding = 2;

  return (
    <StyledRouteItem>
      <StyledRouteInfo>
        <StyledRouteInfoItem>
          <Typography variant='body2'>{t('routes.route')}</Typography>
          <Typography sx={{ color: COLORS.schemes.outline }}>
            #{addPadding(routeId, idPadding)}
          </Typography>
        </StyledRouteInfoItem>
        <StyledRouteInfoItem>
          <Typography variant='body2'>{t('routes.distance')}:</Typography>
          <Typography sx={{ color: COLORS.schemes.outline }}>
            {distance} km
          </Typography>
        </StyledRouteInfoItem>
        <StyledRouteInfoItem>
          <Typography variant='body2'>{t('routes.date')}:</Typography>
          <Typography sx={{ color: COLORS.schemes.outline }}>
            {routeDate.getDay()} {format(routeDate, SHORT_MONTH)}{' '}
            {routeDate.getFullYear()}
          </Typography>
        </StyledRouteInfoItem>

        <StyledRouteInfoItem>
          <Typography variant='body2'>{t('routes.time')}:</Typography>
          <Typography sx={{ color: COLORS.schemes.outline }}>
            {addPadding(routeTime.arrivalDate.getHours(), timePadding)}:
            {addPadding(routeTime.arrivalDate.getMinutes(), timePadding)} -
            {addPadding(routeTime.submissionDate.getHours(), timePadding)}:
            {addPadding(routeTime.submissionDate.getMinutes(), timePadding)}
          </Typography>
        </StyledRouteInfoItem>
      </StyledRouteInfo>
      <StatusComponent status={status} />
    </StyledRouteItem>
  );
};

export default RouteItem;
