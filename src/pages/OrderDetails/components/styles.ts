import { Typography } from '@mui/material';
import { styled } from 'styled-components';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const CollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.schemes.outlineVariant};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 14px;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const CustomerWrapper = styled.div`
  display: flex;
  border: 1px solid ${COLORS.schemes.outlineVariant};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 12px;
  justify-content: space-between;
  position: relative;
`;

export const StyledHeading = styled(Typography)`
  font-size: ${FONT.fontSize.mediumPlus}px !important;
  color: ${COLORS.schemes.secondary}!important;
  margin-bottom: 12px !important;
`;

export const CollectionHeading = styled(Typography)`
  color: ${COLORS.schemes.secondary}!important;
`;

export const CollectionBody = styled(Typography)`
  color: ${COLORS.schemes.outline}!important;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid ${COLORS.accent.accent50};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  cursor: pointer;
  & a {
    height: 30px;
  }
`;
