import { SxProps, Theme } from '@mui/material/styles';

import { COLORS } from '@/constants/colors';

export const mapContainerStyles: SxProps<Theme> = {
  borderRadius: '10px',
  flex: 1,
  marginBottom: 2,
};

export const mapExpandedWrapperStyles: SxProps<Theme> = {
  backgroundColor: COLORS.main.darkShadowBox,
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 5,
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const mapExpandedContainerStyles: SxProps<Theme> = {
  height: '80vh',
  width: '90vw',
  position: 'relative',
};

export const closeIconButtonStyles: SxProps<Theme> = {
  position: 'absolute',
  top: 2,
  right: 2,
  zIndex: 100,
};

export const closeIconStyles: SxProps<Theme> = {
  backgroundColor: COLORS.white,
  borderRadius: '50%',
  height: 32,
  width: 32,
};
