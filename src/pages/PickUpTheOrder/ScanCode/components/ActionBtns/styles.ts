import { SxProps, Theme } from '@mui/system';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const actionBtnsContainer: SxProps<Theme> = {
  maxWidth: '398px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
};

export const buttonStyles: SxProps<Theme> = {
  width: '183px',
  height: '40px',
};

export const backButtonStyles: SxProps<Theme> = {
  ...buttonStyles,
  borderColor: COLORS.schemes.secondary,
  color: COLORS.schemes.secondary,
  fontFamily: FONT.family,
};