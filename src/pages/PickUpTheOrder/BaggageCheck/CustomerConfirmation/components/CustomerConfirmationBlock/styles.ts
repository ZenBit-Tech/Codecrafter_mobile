import { SxProps, Theme } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const customerConfirmationBlock: SxProps<Theme> = {
  marginTop: '87px',
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

export const textField: SxProps<Theme> = {
  display: 'block',
  width: '93vw',
  margin: '0 auto 15px',
  '.css-1d6mh07-MuiInputBase-root-MuiOutlinedInput-root': {
    width: '93vw',
  },
};

export const signatureBox: SxProps<Theme> = {
  border: `1px solid ${COLORS.schemes.outlineVariant}`,
  position: 'relative',
  width: '93vw',
  height: '300px',
  overflow: 'hidden',
  margin: '0 auto',
  borderRadius: '5px',
  marginBottom: '15px',
};

export const removeSignature: SxProps<Theme> = {
  position: 'absolute',
  top: '0',
  right: '-14px',
  color: COLORS.status.failed.text,
};
