import { SxProps, Theme } from '@mui/system';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const identityVerificationContainer: SxProps<Theme> = {
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
  height: '175px',
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

export const passportUploaded: SxProps<Theme> = {
  width: '82px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
  justifyContent: 'center',
  marginLeft: '5px',
  background: COLORS.backgroundGreen,
  color: COLORS.green,
};

export const passportNotUploaded: SxProps<Theme> = {
  width: '122px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  marginLeft: '5px',
  background: COLORS.status.failed.bg,
  color: COLORS.status.failed.text,
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
