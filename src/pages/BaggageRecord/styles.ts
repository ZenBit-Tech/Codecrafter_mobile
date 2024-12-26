import { Box, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/system';

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

export const TitleInfo = styled(Typography)(({ theme }: { theme: Theme }) => ({
  textAlign: 'start',
  fontWeight: FONT.fontWeight.small,
  fontSize: FONT.fontSize.mediumPlus,
  color: COLORS.schemes.secondary,
  marginBottom: '32px',
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
  width: '60px',
  height: '60px',
  objectFit: 'cover',
  backgroundColor: COLORS.schemes.outlineVariant,
  borderRadius: '8px',
});

export const EmptyIcon = styled('img')({
  padding: '15px',
  objectFit: 'cover',
  backgroundColor: COLORS.schemes.outlineVariant,
  borderRadius: '8px',
});

export const ImageDescription = styled(Typography)({
  flex: 1,
  marginLeft: '10px',
  color: COLORS.schemes.secondary,
});

export const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: '32px',
  marginTop: '24px',
});

export const IconImage = styled('img')({
  width: '1.5rem',
  height: '1.5rem',
  marginRight: '4px',
});
