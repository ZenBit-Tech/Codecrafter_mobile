import React from 'react';

import {
  NavbarContainer,
  IconsContainer,
  BarContainer,
  BarCap,
  BarMiddle,
  BarCircle,
  FirstBarSide,
  SecondBarSide,
  ThirdBarSide,
  FourthBarSide,
} from './styles';

import luggageIcon from '@/assets/icons/luggage.svg';
import map from '@/assets/icons/map.svg';
import notification from '@/assets/icons/notification.svg';
import path from '@/assets/icons/path.svg';
import Tab from '@/pages/MainPage/components/Tab';
import { useAppSelector } from '@/redux/hooks';

export const RoutePage = 1;
export const OrdersPage = 2;
export const MapPage = 3;
export const NotificationsPage = 4;

const BottomNavbar = (): JSX.Element => {
  const selected = useAppSelector((state) => state.pages.pageSelected);

  return (
    <NavbarContainer data-selected={selected}>
      <IconsContainer>
        <Tab
          title='route'
          index={RoutePage}
          iconSrc={path}
          active={selected === RoutePage}
        />
        <Tab
          title='orders'
          index={OrdersPage}
          iconSrc={luggageIcon}
          active={selected === OrdersPage}
        />
        <Tab
          title='map'
          index={MapPage}
          iconSrc={map}
          active={selected === MapPage}
        />
        <Tab
          title='notifications'
          index={NotificationsPage}
          iconSrc={notification}
          active={selected === NotificationsPage}
        />
      </IconsContainer>
      <BarContainer>
        <BarCap />
        <BarMiddle>
          <FirstBarSide active={selected} />
          <SecondBarSide active={selected} />
          <BarCircle />
          <ThirdBarSide active={selected} />
          <FourthBarSide active={selected} />
        </BarMiddle>
        <BarCap />
      </BarContainer>
    </NavbarContainer>
  );
};

export default BottomNavbar;
