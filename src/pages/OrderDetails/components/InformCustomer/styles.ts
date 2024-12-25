import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const InformCustomerWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  background-color: ${COLORS.status.atRisk.bg};
  border: 1px solid ${COLORS.status.atRisk.text};
  border-radius: 6px;
  color: ${COLORS.status.atRisk.text};
  margin-bottom: 8px;
`;
