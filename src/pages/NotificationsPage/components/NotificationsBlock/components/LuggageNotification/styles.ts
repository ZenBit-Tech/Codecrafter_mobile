import { SxProps, Theme } from '@mui/material/styles';

import { COLORS } from '@/constants/colors';

export const notificationContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  width: '93vw',
  margin: '0 auto',
};

export const textContainer: SxProps<Theme> = {
  marginLeft: '14px',
};

export const notificationTitle: SxProps<Theme> = {
  color: COLORS.black,
};

export const timeDifferenceTextStyles: SxProps<Theme> = {
  color: COLORS.schemes.secondary,
};
