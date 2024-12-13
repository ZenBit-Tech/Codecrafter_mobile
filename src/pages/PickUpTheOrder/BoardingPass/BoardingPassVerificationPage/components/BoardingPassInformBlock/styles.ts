import { SxProps, Theme } from '@mui/system';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const boardingPassVerificationContainer: SxProps<Theme> = {
  marginTop: '87px',
};

export const title: SxProps<Theme> = {
  paddingLeft: '12px',
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.mediumPlus,
  color: COLORS.schemes.secondary,
  marginBottom: '7px',
  maxWidth: '408px',
  lineHeight: '1.3',
  letterSpacing: '0.3px',
};

export const customerInformationContainer: SxProps<Theme> = {
  border: `1px solid ${COLORS.schemes.outlineVariant}`,
  padding: '10px 3px',
  width: '93vw',
  margin: '0 auto',
  borderRadius: '10px',
  marginBottom: '27px',
};
