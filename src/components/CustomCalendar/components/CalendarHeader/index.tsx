import { format } from 'date-fns';
import { t } from 'i18next';
import { FC } from 'react';

import { StyledImage } from './styles';

import ArrowIcon from '@/assets/icons/arrow-down-01-round.png';

interface CalendarHeaderProps {
  date: Date;
  isExpanded: boolean;
  handleHeaderClick: () => void;
}

const CalendarHeader: FC<CalendarHeaderProps> = ({
  date,
  isExpanded,
  handleHeaderClick,
}) => {
  return (
    <div onClick={handleHeaderClick}>
      <span>{format(date, 'MMMM')}</span>
      <StyledImage
        $isExpanded={isExpanded}
        src={ArrowIcon}
        alt={t('orders.arrowIcon')}
      />
    </div>
  );
};

export default CalendarHeader;
