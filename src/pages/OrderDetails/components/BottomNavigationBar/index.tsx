import { FC } from 'react';

import { t } from 'i18next';

import ArrowLeft from '@/assets/icons/arrow-left.svg';
import Button from '@/components/Button';
import { ROUTE_PAGE_ID } from '@/constants/numbers';
import {
  BottomNavigation,
  IconWrapper,
  navigateStyles,
  RightArrow,
} from '@/pages/OrderDetails/styles';
import { useAppSelector } from '@/redux/hooks';

interface BottomBarProps {
  openNavigateModal: () => void;
}

const BottomNavigationBar: FC<BottomBarProps> = ({ openNavigateModal }) => {
  const { pageSelected: pageId } = useAppSelector((store) => store.pages);

  return (
    <BottomNavigation>
      {pageId === ROUTE_PAGE_ID && (
        <IconWrapper>
          <img src={ArrowLeft} alt={t('orderDetails.prev')} />
        </IconWrapper>
      )}
      <Button
        label={t('orderDetails.navigate')}
        variant='outlined'
        sx={navigateStyles}
        onClick={openNavigateModal}
      />
      {pageId === ROUTE_PAGE_ID && (
        <IconWrapper>
          <RightArrow src={ArrowLeft} alt={t('orderDetails.next')} />
        </IconWrapper>
      )}
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
