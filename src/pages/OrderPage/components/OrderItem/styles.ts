import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const OrderItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${COLORS.schemes.outlineVariant};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 14px;
  position: relative;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const OrderDetails = styled.div`
  display: flex;
  gap: 3px;
  flex-flow: row wrap;
  max-width: 283px;
  box-sizing: border-box;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid ${COLORS.accent.accent50};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;
  & a {
    height: 30px;
  }
`;
