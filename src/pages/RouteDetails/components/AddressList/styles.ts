import { SxProps, Theme } from '@mui/material/styles';

import { COLORS } from '@/constants/colors';

export const lineStyles: SxProps<Theme> = {
  position: 'absolute',
  left: '10px',
  width: '2px',
  background: `repeating-linear-gradient(to bottom, transparent, transparent 8px, ${COLORS.darkGrey} 8px, ${COLORS.darkGrey} 12px)`,
  zIndex: 0,
};

export const addressBoxStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
};

export const addressDetailsStyles: SxProps<Theme> = {
  border: `1px solid ${COLORS.darkGrey}`,
  borderRadius: '8px',
  padding: '8px',
  flex: 1,
};

export const statusIconStyles: SxProps<Theme> = {
  zIndex: 0,
  marginLeft: '1px',
  marginRight: '12px',
};
