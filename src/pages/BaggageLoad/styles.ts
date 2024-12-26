import { Box, Typography } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const Title = styled(Typography)(({ theme }: { theme: Theme }) => ({
  textAlign: 'start',
  color: COLORS.darkGrayPurple,
  [theme.breakpoints.up('sm')]: {
    fontSize: FONT.fontSize.extraLarge,
    marginBottom: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: FONT.fontSize.extraLarge,
  },
}));

export const TitleRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
  gap: '10px',
});

export const DescriptionContainer = styled(Typography)({
  border: `1px solid ${COLORS.schemes.outlineVariant}`,
  borderRadius: '8px',
  padding: '12px 16px',
  color: COLORS.schemes.outline,
});
