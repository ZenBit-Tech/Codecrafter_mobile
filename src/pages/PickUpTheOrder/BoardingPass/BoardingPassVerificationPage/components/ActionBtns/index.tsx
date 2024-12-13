import { Box } from '@mui/system';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { actionBtnsContainer, backButtonStyles, buttonStyles } from './styles';

import Button from '@/components/Button';

export const ActionBtns: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={actionBtnsContainer}>
      <Button
        sx={backButtonStyles}
        label='Back'
        variant='outlined'
        onClick={() => navigate('/app/identity-verification')}
      />
      <Button
        sx={{
          ...buttonStyles,
          padding: '5px 0',
        }}
        label='Verify boarding pass'
        variant='colored'
        onClick={() => navigate('/app/identity-verification')}
      />
    </Box>
  );
};
