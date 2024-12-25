import { Box, Typography } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const Container = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: '16px',
  height: 'calc(100vh - 60px)',
  marginTop: '60px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'auto',
  [theme.breakpoints.up('sm')]: {
    padding: '24px',
    marginTop: '80px',
  },
}));

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

export const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: '32px',
  marginTop: '24px',
});
