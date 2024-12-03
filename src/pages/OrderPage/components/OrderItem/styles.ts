import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const OrderItemWrapper = styled.div`
  display: flex;
  border: 1px solid ${COLORS.schemes.outlineVariant};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 14px;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

export const OrderDetails = styled.div`
  display: flex;
  gap: 3px;
  flex-flow: row wrap;
  width: 283px;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid ${COLORS.accent.accent50};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  cursor: pointer;
  & a {
    height: 30px;
  }
`;
