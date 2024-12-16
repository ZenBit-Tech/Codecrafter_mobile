import { SxProps, Theme } from '@mui/system';

import { COLORS } from '@/constants/colors';

export const modalContainer: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  backgroundColor: COLORS.white,
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: 5,
};
