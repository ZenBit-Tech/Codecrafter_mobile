import { SxProps, Theme } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const OrderDetailsWrapper = styled.div`
  padding: 80px 16px 120px 16px;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 14px;
`;

export const failedButtonStyles: SxProps<Theme> = {
  color: COLORS.status.icons.failed,
  border: `1px solid ${COLORS.status.icons.failed}`,
  height: '40px',
  width: '183px',
  borderRadius: '8px',
  padding: '10px 16px',
  marginBottom: '14px',
  textTransform: 'capitalize',
};

export const customerInformedStyles: SxProps<Theme> = {
  height: '40px',
  width: '183px',
  borderRadius: '8px',
  padding: '10px 16px',
};

export const navigateStyles: SxProps<Theme> = {
  textTransform: 'capitalize',
  flexGrow: 3,
  color: COLORS.purple,
  fontWeight: FONT.fontWeight.large,
  border: `2px solid ${COLORS.purple}`,
};

export const BottomNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  gap: 16px;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${COLORS.purple};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightArrow = styled.img`
  transform: rotate(180deg);
`;
