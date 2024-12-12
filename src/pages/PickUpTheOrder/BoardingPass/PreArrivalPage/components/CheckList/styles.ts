import { SxProps, Theme } from '@mui/system';
import { CSSProperties } from 'react';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const checkListBlockStyles: SxProps<Theme> = {
  marginTop: '87px',
};

export const title: SxProps<Theme> = {
  paddingLeft: '12px',
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.mediumPlus,
  letterSpacing: '0.2px',
  color: COLORS.schemes.secondary,
  marginBottom: '7px',
};

export const listContainer: SxProps<Theme> = {
  height: '175px',
  padding: '10px 3px',
  border: `1px solid ${COLORS.schemes.outlineVariant}`,
  width: '93vw',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'flex-start',
  borderRadius: '10px',
  marginBottom: '27px',
};

export const listStyles: CSSProperties = {
  width: '93vw',
  height: '176px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  listStyle: 'lower-alpha',
  marginLeft: '-13px',
  marginTop: '0px',
};

export const listItemStyles: CSSProperties = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.medium,
  color: COLORS.schemes.outlineVariant,
};

export const warningParagraph: SxProps<Theme> = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.mediumPlus,
  color: COLORS.schemes.secondary,
  marginLeft: '12px',
  letterSpacing: '0.4px',
  lineHeight: '1.3',
};
