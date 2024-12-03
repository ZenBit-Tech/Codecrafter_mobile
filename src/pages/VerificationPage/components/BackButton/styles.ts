import { SxProps, Theme } from '@mui/material/styles';

import { FONT } from '@/constants/font';

export const backButtonStyles: SxProps<Theme> = {
  alignSelf: 'flex-start',
  cursor: 'pointer',
  fontSize: FONT.fontSize.large,
  marginBottom: '20px',
};
