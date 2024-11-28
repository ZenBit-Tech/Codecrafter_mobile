import { SxProps, Theme } from '@mui/material/styles';

import { FONT } from '@/constants/font';

export const resendLinkStyles: SxProps<Theme> = {
  fontFamily: (theme) => theme.typography.fontFamily,
  width: '100%',
  height: '100%',
  paddingTop: '15px',
  textAlign: 'center',
  fontSize: FONT.fontSize.medium,
  color: (theme) => theme.palette.text.primary,
  cursor: 'pointer',
  textDecoration: 'underline',
};
