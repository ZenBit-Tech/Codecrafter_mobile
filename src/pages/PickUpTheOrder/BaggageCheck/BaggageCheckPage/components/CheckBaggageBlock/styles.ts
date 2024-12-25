import { SxProps, Theme } from '@mui/system';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const checkBaggageBlock: SxProps<Theme> = { marginTop: '87px' };

export const calculatorBlock: SxProps<Theme> = {
  height: '175px',
  padding: '10px 3px',
  border: `1px solid ${COLORS.schemes.outlineVariant}`,
  width: '93vw',
  margin: '0 auto',
  borderRadius: '10px',
  marginBottom: '27px',
};

export const maxWeightTitle: SxProps<Theme> = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.mediumPlus,
  fontWeight: FONT.fontWeight.large,
  color: COLORS.schemes.secondary,
  textAlign: 'center',
  marginBottom: '10px',
};

export const bagTitle: SxProps<Theme> = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.mediumPlus,
  fontWeight: FONT.fontWeight.large,
  color: COLORS.schemes.secondary,
  marginLeft: '10px',
  textTransform: 'capitalize',
};

export const bagDetails: SxProps<Theme> = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.medium,
  fontWeight: FONT.fontWeight.medium,
  color: COLORS.schemes.outline,
  marginLeft: '10px',
};

export const weightLabel: SxProps<Theme> = {
  paddingLeft: '10px',
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.medium,
  letterSpacing: '0.2px',
  color: COLORS.schemes.secondary,
  marginRight: '5px',
};

export const inputField: SxProps<Theme> = {
  width: '60px',
  height: '32px',
  padding: '1px',

  '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: '4px',
  },
};

export const importantBlock: SxProps<Theme> = {
  height: '175px',
  padding: '10px 3px',
  border: `1px solid ${COLORS.schemes.outlineVariant}`,
  width: '93vw',
  margin: '0 auto',
  borderRadius: '10px',
  marginBottom: '27px',
};

export const importantTitle: SxProps<Theme> = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.mediumPlus,
  marginLeft: '10px',
};

export const importantText: SxProps<Theme> = {
  paddingLeft: '10px',
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.medium,
  letterSpacing: '0.2px',
  color: COLORS.schemes.secondary,
};
