import { createTheme, Interpolation, Theme } from '@mui/material/styles';

import { COLORS } from './constants/colors';
import { FONT } from './constants/font';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    colored: true;
    lined: true;
    grey: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.main.dark,
      light: COLORS.main.light,
    },
    secondary: {
      main: COLORS.text.dark,
      dark: COLORS.text.extraLight,
      light: COLORS.text.border,
    },
    background: {
      default: COLORS.background.logoBlock,
      paper: COLORS.text.white,
    },
  },
  typography: {
    fontSize: FONT.fontSize.medium,
    fontWeightLight: FONT.fontWeight.small,
    fontFamily: FONT.family,
    h1: {
      fontSize: FONT.fontSize.extraLarge,
      fontWeight: FONT.fontWeight.large,
      '@media not (max-width:320px)': {
        fontSize: '26px',
      },
    },
    h2: {
      fontSize: FONT.fontSize.extraLarge,
      fontWeight: FONT.fontWeight.large,
      color: COLORS.text.dark,
    },
    body1: {
      fontSize: FONT.fontSize.medium,
      fontWeight: FONT.fontWeight.small,
    },
    body2: {
      fontSize: FONT.fontSize.medium,
      fontWeight: FONT.fontWeight.large,
      color: COLORS.text.dark,
    },
    subtitle1: {
      fontSize: FONT.fontSize.extraLarge,
      fontWeight: FONT.fontWeight.small,
      color: COLORS.text.onSurface,
    },
    subtitle2: {
      fontSize: FONT.fontSize.extraLarge,
      fontWeight: FONT.fontWeight.small,
      color: COLORS.text.onSurface,
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'colored' },
          style: ({ theme: styleTheme }): Interpolation<{ theme: Theme }> => ({
            fontWeight: FONT.fontWeight.medium,
            textTransform: 'none',
            backgroundColor: styleTheme.palette.primary.main,
            borderRadius: styleTheme.shape.borderRadius,
            color: COLORS.text.white,
            '&:hover': {
              backgroundColor: styleTheme.palette.primary.dark,
              color: COLORS.text.white,
            },
          }),
        },
        {
          props: { variant: 'lined' },
          style: ({ theme: styleTheme }): Interpolation<{ theme: Theme }> => ({
            fontWeight: FONT.fontWeight.medium,
            textTransform: 'none',
            backgroundColor: 'transparent',
            color: styleTheme.palette.primary.main,
            border: `1px solid ${styleTheme.palette.primary.main}`,
            '&:hover': {
              backgroundColor: styleTheme.palette.primary.light,
            },
          }),
        },
        {
          props: { variant: 'grey' },
          style: (): Interpolation<{ theme: Theme }> => ({
            fontWeight: FONT.fontWeight.medium,
            textTransform: 'none',
            backgroundColor: COLORS.status.completed.bg,
            color: COLORS.status.completed.text,
            '&:hover': {
              backgroundColor: COLORS.text.extraLight,
            },
          }),
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme: styleTheme }): Interpolation<{ theme: Theme }> => ({
          '& label': {
            color: COLORS.text.light,
          },
          color: COLORS.text.light,
          borderRadius: styleTheme.shape.borderRadius,
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: COLORS.green,
          '&.Mui-checked': {
            color: COLORS.green,
          },
        },
      },
    },
  },
});

export default theme;
