import { Avatar } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const StyledAvatar = styled(Avatar)`
  width: '38px';
  height: '38px';
  bgcolor: ${COLORS.transparentViolet}!important;
  color: ${COLORS.purple}!important;
  fontsize: ${FONT.fontSize.medium}!important;
`;
