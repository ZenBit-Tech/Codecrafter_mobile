import React from 'react';

import {
  BarCap,
  BarCircle,
  BarContainer,
  BarMiddle,
  FirstBarSide,
  FourthBarSide,
  IconsContainer,
  NavbarContainer,
  SecondBarSide,
  ThirdBarSide,
} from './styles';

import luggageIcon from '@/assets/icons/luggage.svg';
import map from '@/assets/icons/map.svg';
import notification from '@/assets/icons/notification.svg';
import path from '@/assets/icons/path.svg';
import {
  MAP_PAGE_NUMBER,
  NOTIFICATION_PAGE_NUMBER,
  ORDERS_PAGE_NUMBER,
  ROUTE_PAGE_NUMBER,
} from '@/constants/pageNumbers';
import Tab from '@/pages/MainPage/components/Tab';
import { useAppSelector } from '@/redux/hooks';

const BottomNavbar = (): JSX.Element => {
  const selected = useAppSelector((state) => state.pages.pageSelected);

  return (
    <NavbarContainer data-selected={selected}>
      <IconsContainer>
        <Tab
          title='routes'
          index={ROUTE_PAGE_NUMBER}
          iconSrc={path}
          active={selected === ROUTE_PAGE_NUMBER}
        />
        <Tab
          title='orders'
          index={ORDERS_PAGE_NUMBER}
          iconSrc={luggageIcon}
          active={selected === ORDERS_PAGE_NUMBER}
        />
        <Tab
          title='map'
          index={MAP_PAGE_NUMBER}
          iconSrc={map}
          active={selected === MAP_PAGE_NUMBER}
        />
        <Tab
          title='notifications'
          index={NOTIFICATION_PAGE_NUMBER}
          iconSrc={notification}
          active={selected === NOTIFICATION_PAGE_NUMBER}
        />
      </IconsContainer>
      <BarContainer>
        <BarCap />
        <BarMiddle>
          <FirstBarSide $active={selected} />
          <SecondBarSide $active={selected} />
          <BarCircle />
          <ThirdBarSide $active={selected} />
          <FourthBarSide $active={selected} />
        </BarMiddle>
        <BarCap />
      </BarContainer>
    </NavbarContainer>
  );
};

export default BottomNavbar;
