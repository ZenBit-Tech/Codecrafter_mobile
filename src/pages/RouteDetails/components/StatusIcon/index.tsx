import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from 'react-icons/ai';

import { COLORS } from '@/constants/colors';
import { OrderStatuses } from '@/constants/status';

interface StatusIconProps {
  status: string;
}

const StatusIcon: React.FC<{ status: string }> = ({
  status,
}: StatusIconProps) => {
  const iconSize = 20;

  const iconMap: Record<string, JSX.Element> = {
    [OrderStatuses.FAILED]: (
      <AiOutlineCloseCircle
        color={COLORS.status.icons.failed}
        size={iconSize}
      />
    ),
    [OrderStatuses.COMPLETED]: (
      <AiOutlineCheckCircle
        color={COLORS.status.icons.completed}
        size={iconSize}
      />
    ),
    [OrderStatuses.AT_RISK]: (
      <AiOutlineWarning color={COLORS.status.icons.atRisk} size={iconSize} />
    ),
    [OrderStatuses.NOT_ARRIVED]: (
      <AiOutlineCloseCircle
        color={COLORS.status.icons.notArrived}
        size={iconSize}
      />
    ),
    Info: (
      <AiOutlineInfoCircle color={COLORS.status.icons.atRisk} size={iconSize} />
    ),
  };

  const getDefaultIcon = (): JSX.Element => (
    <AiOutlineInfoCircle color={COLORS.status.icons.upcoming} size={iconSize} />
  );

  const getIconByStatus = (orderStatus: OrderStatuses): JSX.Element => {
    return iconMap[orderStatus] || getDefaultIcon();
  };

  return getIconByStatus(status as OrderStatuses) || null;
};

export default StatusIcon;
