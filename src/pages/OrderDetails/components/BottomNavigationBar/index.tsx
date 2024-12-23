import { FC } from 'react';

import { t } from 'i18next';

import ArrowLeft from '@/assets/icons/arrow-left.svg';
import Button from '@/components/Button';
import {
  BottomNavigation,
  IconWrapper,
  navigateStyles,
  RightArrow,
} from '@/pages/OrderDetails/styles';

interface BottomBarProps {
  openNavigateModal: () => void;
}

const BottomNavigationBar: FC<BottomBarProps> = ({ openNavigateModal }) => {
  return (
    <BottomNavigation>
      <IconWrapper>
        <img src={ArrowLeft} alt={t('orderDetails.prev')} />
      </IconWrapper>
      <Button
        label={t('orderDetails.navigate')}
        variant='outlined'
        sx={navigateStyles}
        onClick={openNavigateModal}
      />
      <IconWrapper>
        <RightArrow src={ArrowLeft} alt={t('orderDetails.next')} />
      </IconWrapper>
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
