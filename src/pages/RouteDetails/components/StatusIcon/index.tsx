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
  const iconMap: Record<string, JSX.Element> = {
    failed: (
      <AiOutlineCloseCircle color={COLORS.status.icons.failed} size={20} />
    ),
    completed: (
      <AiOutlineCheckCircle color={COLORS.status.icons.completed} size={20} />
    ),
    atRisk: <AiOutlineWarning color={COLORS.status.icons.atRisk} size={20} />,
    upcoming: (
      <AiOutlineInfoCircle color={COLORS.status.icons.upcoming} size={20} />
    ),
  };

  return iconMap[status] || null;
};

export default StatusIcon;
