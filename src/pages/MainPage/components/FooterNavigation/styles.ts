import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import {
  MAP_PAGE_NUMBER,
  NOTIFICATION_PAGE_NUMBER,
  ORDERS_PAGE_NUMBER,
  ROUTE_PAGE_NUMBER,
} from '@/constants/pageNumbers';

export const transitionDuration = '0.5s';

export const NavbarContainer = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 90px;
  user-select: none;
`;

export const IconsContainer = styled.div`
  box-sizing: border-box
  position: absolute;
  padding: 1.5% calc(81px - 6.5vw);
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 350px) {
    padding: 1.5% calc(79px - 5.3vw);
  }

  @media screen and (min-width: 375px) {
    padding: 1.5% calc(80px - 4.9vw);
  }
  @media screen and (min-width: 425px) {
    padding: 1.5% calc(72px - 3vw);
  }
  @media screen and (min-width: 475px) {
    padding: 1.5% calc(70px - 2.2vw);
  }
  @media screen and (min-width: 525px) {
    padding: 1.5% calc(75px - 2.8vw);
  
  @media screen and (min-width: 600px) {
    padding: 1.5% calc(78px - 2.8vw);
  }
  @media screen and (min-width: 700px) {
    padding: 1.5% calc(80px - 2.8vw);
  }
  @media screen and (min-width: 768px) {
    padding: 1.5% calc(82px - 2.8vw);
  }
  @media screen and (min-width: 850px) {
    padding: 1.5% calc(82px - 2.5vw);
  }
  @media screen and (min-width: 950px) {
    padding: 1.5% calc(84px - 2.5vw);
  }
  @media screen and (min-width: 1024px) {
    padding: 2% 5.8%;
  }
  @media screen and (min-width: 1100px) {
    padding: 2% 4.1%;
  }
`;

export const BarContainer = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
`;

export const BarCap = styled.div`
  background: ${COLORS.gray};
  width: 1rem;
  &:first-child {
    border-top-left-radius: 0.5rem;
  }
  &:last-child {
    border-top-right-radius: 0.5rem;
  }
`;

export const BarMiddle = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
`;

export const FirstBarSide = styled.div<{ $active?: number }>`
  flex-grow: ${({ $active }): number =>
    $active === ROUTE_PAGE_NUMBER ? 0 : 1};
  background: ${COLORS.gray};
  transition: flex-grow ${transitionDuration} ease;
`;

export const SecondBarSide = styled.div<{ $active?: number }>`
  flex-grow: ${({ $active }): number =>
    $active === ROUTE_PAGE_NUMBER || $active === ORDERS_PAGE_NUMBER ? 0 : 1};
  background: ${COLORS.gray};
  transition: flex-grow ${transitionDuration} ease;
`;

export const ThirdBarSide = styled.div<{ $active?: number }>`
  flex-grow: ${({ $active }): number =>
    $active === MAP_PAGE_NUMBER || $active === NOTIFICATION_PAGE_NUMBER
      ? 0
      : 1};
  background: ${COLORS.gray};
  transition: flex-grow ${transitionDuration} ease;
`;

export const FourthBarSide = styled.div<{ $active?: number }>`
  flex-grow: ${({ $active }): number =>
    $active === NOTIFICATION_PAGE_NUMBER ? 0 : 1};
  background: ${COLORS.gray};
  transition: flex-grow ${transitionDuration} ease;
`;

export const BarCircle = styled.div`
  position: relative;
  top: -1.75rem;
  width: 7rem;
  height: 5.75rem;
  border-bottom: 140px solid ${COLORS.gray};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Ccircle cx='56' cy='36' r='36' fill='%237367F0'/%3E%3Cpath d='M104 35.2L104 35.2c0 26.3-20.9 48.3-47.2 48.8C29.9 84.4 8 62.8 8 36v-0.8c0-4-3.2-7.2-7.2-7.2H0v64h112V28h-0.8C107.2 28 104 31.2 104 35.2z' fill='%23F6F6F6'/%3E%3C/svg%3E");
  background-size: cover;
`;
