import { t } from 'i18next';

import { COLORS } from '@/constants/colors';
import { RouteStatuses } from '@/constants/status';

export const assignColor = (status: RouteStatuses): string => {
  const statusColorMap = {
    [RouteStatuses.AT_RISK]: COLORS.status.icons.atRisk,
    [RouteStatuses.ON_TIME]: COLORS.status.icons.completed,
    [RouteStatuses.FAILED]: COLORS.status.icons.failed,
    [RouteStatuses.UPCOMING]: COLORS.status.icons.upcoming,
  };

  return statusColorMap[status] || COLORS.darkGrey;
};
export const assignRouteStatus = (status: RouteStatuses): string => {
  const statusColorMap = {
    [RouteStatuses.AT_RISK]: t('routes.status.atRisk'),
    [RouteStatuses.ON_TIME]: t('routes.status.onTime'),
    [RouteStatuses.FAILED]: t('routes.status.failed'),
    [RouteStatuses.UPCOMING]: t('routes.status.upcoming'),
  };

  return statusColorMap[status] || '';
};
