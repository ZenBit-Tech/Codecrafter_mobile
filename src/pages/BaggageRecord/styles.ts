import { Box, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/system';

import Button from '@/components/Button';
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

export const CenteredButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '24px auto',
  padding: '8px 16px',
});

export const TitleInfo = styled(Typography)(({ theme }: { theme: Theme }) => ({
  textAlign: 'start',
  fontWeight: FONT.fontWeight.small,
  fontSize: FONT.fontSize.mediumPlus,
  color: COLORS.schemes.secondary,
  [theme.breakpoints.up('sm')]: {
    fontSize: FONT.fontSize.extraLarge,
    marginBottom: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: FONT.fontSize.extraLarge,
  },
}));

export const ImageListItem = styled(ListItem)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  marginBottom: '10px',
  border: `1px solid ${COLORS.schemes.outlineVariant}`,
  borderRadius: '8px',
});

export const Image = styled('img')({
  width: '50px',
  height: '50px',
  objectFit: 'cover',
  backgroundColor: COLORS.purple,
  borderRadius: '4px',
});

export const ImageDescription = styled(Typography)({
  flex: 1,
  marginLeft: '16px',
  color: COLORS.schemes.secondary,
});

export const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: '32px',
  marginTop: '24px',
});

export const IconImage = styled('img')({
  width: '1.375rem',
  height: '1.375rem',
  '@media (max-width:600px)': {
    width: '1.125rem',
    height: '1.125rem',
  },
});
