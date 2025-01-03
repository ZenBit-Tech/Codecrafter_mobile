import { SxProps, Theme } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const itemsBlock: SxProps<Theme> = {
  marginTop: '87px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const importantBox: SxProps<Theme> = {
  height: '86px',
  padding: '10px 3px',
  border: `1px solid ${COLORS.schemes.outlineVariant}`,
  width: '93vw',
  margin: '0 auto',
  borderRadius: '10px',
  marginBottom: '27px',
};

export const importantTitle: SxProps<Theme> = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.mediumPlus,
  marginLeft: '10px',
};

export const importantText: SxProps<Theme> = {
  paddingLeft: '10px',
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.medium,
  letterSpacing: '0.2px',
  color: COLORS.schemes.secondary,
};

export const prohibitedItemsImage: React.CSSProperties = {
  marginBottom: '20px',
  width: '100%',
};
