import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const StyledRouteItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid ${COLORS.schemes.outlineVariant};
  margin-bottom: 14px;
`;

export const StyledRouteInfo = styled.div`
  box-sizing: border-box;
  width: 283px;
  display: flex;
  gap: 3px;
  flex-flow: row wrap;
`;

export const StyledRouteInfoItem = styled.div`
  box-sizing: border-box;
  width: 140px;
  @media only screen and (max-width: 400px) {
    width: 120px;
  }
`;
