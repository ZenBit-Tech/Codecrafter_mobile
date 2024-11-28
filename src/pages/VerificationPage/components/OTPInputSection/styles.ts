import { SxProps, Theme } from '@mui/material/styles';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const otpInputContainerStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
};

export const otpInputWrapperStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '8px',
};

export const otpInputStyle: React.CSSProperties = {
  width: '35px',
  height: '35px',
  fontFamily: FONT.family,
  marginRight: '4px',
  fontSize: FONT.fontSize.large,
  border: `1px solid ${COLORS.status.completed.text}`,
  borderRadius: '4px',
  textAlign: 'center',
};

export const otpFocusStyle: React.CSSProperties = {
  border: `2px solid ${COLORS.main.dark}`,
  outline: 'none',
};

export const timeExpiryStyles: SxProps<Theme> = {
  fontFamily: (theme) => theme.typography.fontFamily,
  color: (theme) => theme.palette.text.secondary,
  marginBottom: 2,
  size: FONT.fontSize.small,
  fontWeight: FONT.fontWeight.small,
};
