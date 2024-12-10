import styled, { createGlobalStyle } from 'styled-components';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const GlobalStyle = createGlobalStyle`
  .react-calendar__tile--now {
    background-color: ${COLORS.white} !important;
  }
`;

export const StyledCalendar = styled.div<{ $isExpanded: boolean }>`
  .react-calendar {
    border: 1px solid ${COLORS.schemes.outlineVariant}!important;
    border-radius: 8px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 18px;
    transition: all 0.3s;
    height: ${(props): string => (props.$isExpanded ? '400' : '150')}px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .react-calendar__tile {
    border-radius: 4px;
    transition: all 0.3s;
    color: ${COLORS.schemes.outline}!important;
    font-size: ${FONT.fontSize.large}px!important;
    &:hover {
      background-color: ${COLORS.gray};
    }
  }

  .react-calendar__tile--active {
    background-color: ${COLORS.white}!important;
    color: ${COLORS.purple}!important;
  }

  ${(props): string =>
    props.$isExpanded
      ? ''
      : `.react-calendar__month-view__weekdays,
  .displayNone {
    display: none !important;
  }`}

  .react-calendar__month-view__days,
  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
  }
  .react-calendar__month-view__days__day--weekend {
    color: ${COLORS.status.icons.failed} !important;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${COLORS.darkGrey} !important;
  }

  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none !important;
  }
  .react-calendar__navigation__label {
    font-size: ${FONT.fontSize.large}px;
    font-weight: ${FONT.fontWeight.large};
    color: ${COLORS.schemes.secondary};
  }
`;
export const StyledWeekday = styled.div`
  margin-top: 12px;
  font-size: ${FONT.fontSize.medium}px;
`;
