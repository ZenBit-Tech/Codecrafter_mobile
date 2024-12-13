import { FC } from 'react';

import { t } from 'i18next';

import { LabelWrapper } from './styles';

import ArrowLeft from '@/assets/icons/arrow-left-01-round.svg';
import ArrowRight from '@/assets/icons/arrow-right-01-round.svg';

interface LabelProps {
  monthName: string;
  isRightArrow?: boolean;
}
const Label: FC<LabelProps> = ({ monthName, isRightArrow = true }) => {
  return (
    <LabelWrapper>
      {!isRightArrow && <img src={ArrowLeft} alt={t('orders.prevMonth')} />}
      <p>{monthName}</p>
      {isRightArrow && <img src={ArrowRight} alt={t('orders.nextMonth')} />}
    </LabelWrapper>
  );
};

export default Label;
