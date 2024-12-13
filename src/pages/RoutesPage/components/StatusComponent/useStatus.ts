import { t } from 'i18next';

import { COLORS } from '@/constants/colors';
import { StatusEnum } from '@/constants/status';

export const assignColor = (status: StatusEnum): string => {
  const statusColorMap = {
    [StatusEnum.AT_RISK]: COLORS.status.icons.atRisk,
    [StatusEnum.COMPLETED]: COLORS.status.icons.completed,
    [StatusEnum.FAILED]: COLORS.status.icons.failed,
    [StatusEnum.UPCOMING]: COLORS.status.icons.upcoming,
  };

  return statusColorMap[status] || COLORS.darkGrey;
};
export const assignRouteStatus = (status: StatusEnum): string => {
  const statusColorMap = {
    [StatusEnum.AT_RISK]: t('routes.status.atRisk'),
    [StatusEnum.COMPLETED]: t('routes.status.onTime'),
    [StatusEnum.FAILED]: t('routes.status.failed'),
    [StatusEnum.UPCOMING]: t('routes.status.upcoming'),
  };

  return statusColorMap[status] || '';
};
