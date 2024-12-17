import { SxProps, Theme } from '@mui/material/styles';

export const modalStyles: SxProps<Theme> = {
  boxSizing: 'border-box',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '93%',
  maxWidth: '500px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '12px',
  padding: '24px',
};

export const headerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '32px',
};

export const iconButtonStyles: SxProps<Theme> = {
  padding: 0,
};

export const buttonContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};
