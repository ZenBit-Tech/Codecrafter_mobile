import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from 'react-icons/ai';

import { COLORS } from '@/constants/colors';

interface StatusIconProps {
  status: string;
}

const StatusIcon: React.FC<{ status: string }> = ({
  status,
}: StatusIconProps) => {
  const iconSize = 20;

  const iconMap: Record<string, JSX.Element> = {
    failed: (
      <AiOutlineCloseCircle
        color={COLORS.status.icons.failed}
        size={iconSize}
      />
    ),
    completed: (
      <AiOutlineCheckCircle
        color={COLORS.status.icons.completed}
        size={iconSize}
      />
    ),
    atRisk: (
      <AiOutlineWarning color={COLORS.status.icons.atRisk} size={iconSize} />
    ),
    upcoming: (
      <AiOutlineInfoCircle
        color={COLORS.status.icons.upcoming}
        size={iconSize}
      />
    ),
  };

  return iconMap[status] || null;
};

export default StatusIcon;
