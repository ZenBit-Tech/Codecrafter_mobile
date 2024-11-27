import { SxProps, Theme } from '@mui/material/styles';

export const containerStyles: SxProps<Theme> = {
  margin: 0,
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'row',
  height: '100vh',
  overflow: 'hidden',
};

export const mainBoxStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  overflow: 'hidden',
};

export const leftBoxStyles: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  marginTop: '53px',
  maxHeight: '208px',
  maxWidth: '208px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  px: { xs: 2, sm: 4 },
  boxSizing: 'border-box',
  overflow: 'hidden',
};

export const rightBoxStyles: SxProps<Theme> = {
  width: { xs: '100%', md: '50%', lg: '40%' },
  height: { xs: '50vh', md: '100%' },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  marginTop: '36px',
  backgroundColor: (theme) => theme.palette.background.paper,
  px: { xs: 2, sm: 6, md: 12 },
  textAlign: 'start',
  boxSizing: 'border-box',
  overflow: 'hidden',
};

export const inputBoxStyles: SxProps<Theme> = {
  width: '100%',
  mt: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};
