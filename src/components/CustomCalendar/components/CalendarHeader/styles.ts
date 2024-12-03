import styled from 'styled-components';

export const StyledImage = styled.img<{ $isExpanded: boolean }>`
  position: relative;
  top: 4px;
  left: 4px;
  transition: all 0.3s;
  transform: rotate(${(props): string => (props.$isExpanded ? '180' : '0')}deg);
`;

export const CalendarHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
