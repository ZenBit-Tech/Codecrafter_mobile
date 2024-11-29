import { SxProps, Theme } from '@mui/material/styles';

import { FONT } from '@/constants/font';

export const titleContainerStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
};

export const titleStyles: SxProps<Theme> = {
  fontFamily: (theme) => theme.typography.fontFamily,
  color: (theme) => theme.palette.text.primary,
  marginBottom: 1,
  lineHeight: '28px',
  fontWeight: FONT.fontWeight.large,
};

export const subtitleStyles: SxProps<Theme> = {
  fontFamily: (theme) => theme.typography.fontFamily,
  color: (theme) => theme.palette.text.primary,
  marginBottom: '48px',
  textAlign: 'start',
};
