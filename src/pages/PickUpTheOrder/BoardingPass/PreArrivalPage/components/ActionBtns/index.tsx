import { Box } from '@mui/system';
import { FC } from 'react';

import { actionBtnsContainer, backButtonStyles, buttonStyles } from './styles';

import Button from '@/components/Button';

export const ActionBtns: FC = () => (
  <Box sx={actionBtnsContainer}>
    <Button sx={backButtonStyles} label='Back' variant='outlined' />
    <Button sx={buttonStyles} label='Transporter Locked' variant='colored' />
  </Box>
);
