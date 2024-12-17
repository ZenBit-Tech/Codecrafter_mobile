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

import { FULL_TIME, ROUTES_DATE_FORMAT } from '@/constants/dateFormats';
import { RouteStatuses } from '@/constants/status';
import StatusComponent from '@/pages/RoutesPage/components/StatusComponent';
import { addPadding } from '@/utils/stringUtils';

interface RouteItemProps {
  route_id: number;
  route_submission_date: Date;
  route_arrival_date: Date;
  route_distance: number;
  route_status: RouteStatuses;
}

const RouteItem: FC<RouteItemProps> = ({
  route_id: routeId,
  route_submission_date: routeSubmission,
  route_arrival_date: routeArrival,
  route_distance: distance,
  route_status: status,
}) => {
  const idPadding = 6;

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
            {format(new Date(routeSubmission), ROUTES_DATE_FORMAT)}
          </StyledTypography>
        </StyledRouteInfoItem>

        <StyledRouteInfoItem>
          <Typography variant='body2'>{t('routes.time')}:</Typography>
          <StyledTypography>
            {format(new Date(routeSubmission), FULL_TIME)} -{' '}
            {format(new Date(routeArrival), FULL_TIME)}
          </StyledTypography>
        </StyledRouteInfoItem>
      </StyledRouteInfo>
      <StatusComponent status={status} />
    </StyledRouteItem>
  );
};

export default RouteItem;
