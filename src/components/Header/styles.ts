import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(38px + 2 * 16px);
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.white};
  z-index: 2;
`;

export const StyledPageName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

export const BackIconWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasBackIcon',
})<{
  hasBackIcon?: boolean;
}>`
  cursor: pointer;
  visibility: ${(props): string => (props.hasBackIcon ? 'visible' : 'hidden')};
`;
