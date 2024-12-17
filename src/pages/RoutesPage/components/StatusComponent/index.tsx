import { FC } from 'react';

import { Typography } from '@mui/material';
import { t } from 'i18next';

import { StatusItemWrapper } from './styles';
import { assignColor, assignRouteStatus } from './useStatus';

import { RouteStatuses } from '@/constants/status';

interface StatusItemProps {
  status: RouteStatuses;
}

const StatusComponent: FC<StatusItemProps> = ({ status }) => {
  return (
    <StatusItemWrapper>
      <Typography variant='body2' sx={{ color: assignColor(status) }}>
        {t('routes.statusText')}:
        <br />
        {assignRouteStatus(status)}
      </Typography>
    </StatusItemWrapper>
  );
};

export default StatusComponent;
