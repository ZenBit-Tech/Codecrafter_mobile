import { SxProps, Theme } from '@mui/material';

import { FONT } from '@/constants/font';

export const containerStyles: SxProps<Theme> = {
  textAlign: 'center',
  padding: 4,
  backgroundColor: (theme) => theme.palette.background.default,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const headingStyles: SxProps<Theme> = {
  fontSize: FONT.fontSize.extraLarge,
  fontWeight: (theme) => theme.typography.fontWeightLight,
  color: (theme) => theme.palette.text.primary,
  marginBottom: 2,
};

export const messageStyles: SxProps<Theme> = {
  fontSize: FONT.fontSize.large,
  fontWeight: (theme) => theme.typography.fontWeightLight,
  color: (theme) => theme.palette.text.secondary,
  marginBottom: 3,
};
