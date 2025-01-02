import { SxProps, Theme } from '@mui/system';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const scanBlock: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ccc',
  position: 'fixed',
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

export const scanTitleBlock: SxProps<Theme> = {
  width: '120px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.white,
  fontSize: FONT.fontSize.small,
  borderRadius: '4px',
  marginBottom: '150px',
};
