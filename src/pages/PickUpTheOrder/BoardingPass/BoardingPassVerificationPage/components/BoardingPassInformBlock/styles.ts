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

export const customerPropTitle: SxProps<Theme> = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.medium,
  fontWeight: FONT.fontWeight.large,
  marginLeft: '5px',
};

export const customerProp: SxProps<Theme> = {
  color: COLORS.schemes.outline,
  marginLeft: '5px',
};

export const showTicketContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '30px',
  width: '92vw',
  margin: '0 auto',
  justifyContent: 'space-between',
};

export const showTicketTitle: SxProps<Theme> = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.medium,
  color: COLORS.schemes.outline,
};

export const showTicketBtn: SxProps<Theme> = {
  width: '66px',
  height: '32px',
  border: `2px solid ${COLORS.purple}`,
  textTransform: 'capitalize',
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.medium,
  color: COLORS.purple,
  fontWeight: FONT.fontWeight.large,
};

export const confirmInformContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '30px',
};

export const confirmInformTitle: SxProps<Theme> = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.medium,
  color: COLORS.schemes.outline,
};
