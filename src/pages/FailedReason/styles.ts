import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '@/components/Button';
import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import TextInputWithRef from '@/pages/SignIn/components/TextInputRef';

export const Container = styled(Box)(({ theme }) => ({
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

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  textAlign: 'center',
  fontSize: FONT.fontSize.mediumLarge,
  color: COLORS.darkGrayPurple,
  [theme.breakpoints.up('sm')]: {
    fontSize: FONT.fontSize.large,
    marginBottom: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: FONT.fontSize.extraLarge,
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: '32px',
  textAlign: 'center',
  color: COLORS.darkGrayPurple,
  [theme.breakpoints.up('sm')]: {
    fontSize: FONT.fontSize.mediumLarge,
    marginBottom: '40px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: FONT.fontSize.large,
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '32px',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    marginBottom: '40px',
  },
}));

export const ReasonButton = styled(Button)(({ theme }) => ({
  padding: '14px',
  borderRadius: '8px',
  fontSize: FONT.fontSize.mediumLarge,
  [theme.breakpoints.up('sm')]: {
    flex: '1 0 calc(33.33% - 16px)',
    maxWidth: 'calc(33.33% - 16px)',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: FONT.fontSize.large,
  },
}));

export const InputField = styled(TextInputWithRef)(({ theme }) => ({
  height: '131px',
  '& .MuiInputBase-root': {
    height: '100%',
    alignItems: 'flex-start',
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: '8px',
    height: '150px',
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '16px',
    height: '180px',
    width: '100%',
  },
}));

export const ActionContainer = styled(Box)({
  display: 'flex',
  gap: '32px',
});
