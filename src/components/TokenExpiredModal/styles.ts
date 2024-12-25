import { Box, styled } from '@mui/material';

import Button from '@/components/Button';

export const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));

export const ModalButton = styled(Button)({
  marginTop: '8px',
  alignSelf: 'center',
});
