import { CSSProperties } from 'react';

import { SxProps, Theme } from '@mui/system';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const warnBlockStyles: SxProps<Theme> = {
  marginTop: '87px',
};

export const title: SxProps<Theme> = {
  paddingLeft: '12px',
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.large,
  letterSpacing: '0.2px',
  color: COLORS.black,
  marginBottom: '7px',
  marginLeft: '7px',
  display: 'flex',
  alignItems: 'center',
};

export const warnIconStyles: CSSProperties = {
  marginRight: '5px',
};

export const listContainer: SxProps<Theme> = {
  height: '130px',
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
  height: '130px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginLeft: '-13px',
  marginTop: '0px',
};

export const listItemStyles: CSSProperties = {
  fontFamily: FONT.family,
  fontSize: FONT.fontSize.mediumPlus,
  color: COLORS.schemes.outlineVariant,
};
