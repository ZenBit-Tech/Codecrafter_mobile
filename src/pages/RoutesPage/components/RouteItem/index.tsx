import { FC } from 'react';

import { Typography } from '@mui/material';
import { format } from 'date-fns';
import { t } from 'i18next';

import {
  StyledRouteInfo,
  StyledRouteInfoItem,
  StyledRouteItem,
  StyledTypography,
} from './styles';

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
          <StyledTypography>#{addPadding(routeId, idPadding)}</StyledTypography>
        </StyledRouteInfoItem>
        <StyledRouteInfoItem>
          <Typography variant='body2'>{t('routes.distance')}:</Typography>
          <StyledTypography>{distance} km</StyledTypography>
        </StyledRouteInfoItem>
        <StyledRouteInfoItem>
          <Typography variant='body2'>{t('routes.date')}:</Typography>
          <StyledTypography>
            {routeDate.getDay()} {format(routeDate, SHORT_MONTH)}{' '}
            {routeDate.getFullYear()}
          </StyledTypography>
        </StyledRouteInfoItem>

        <StyledRouteInfoItem>
          <Typography variant='body2'>{t('routes.time')}:</Typography>
          <StyledTypography>
            {addPadding(routeTime.arrivalDate.getHours(), timePadding)}:
            {addPadding(routeTime.arrivalDate.getMinutes(), timePadding)} -
            {addPadding(routeTime.submissionDate.getHours(), timePadding)}:
            {addPadding(routeTime.submissionDate.getMinutes(), timePadding)}
          </StyledTypography>
        </StyledRouteInfoItem>
      </StyledRouteInfo>
      <StatusComponent status={status} />
    </StyledRouteItem>
  );
};

export default RouteItem;
