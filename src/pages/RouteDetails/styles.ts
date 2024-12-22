import { SxProps, Theme } from '@mui/material/styles';

export const containerStyles: SxProps<Theme> = {
  padding: '16px',
  height: '90vh',
  marginTop: '60px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'auto',
};

export const spacerStyles: SxProps<Theme> = {
  marginBottom: '120px',
};
