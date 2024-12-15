import { Box } from '@mui/system';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  actionBtnsContainer,
  backButtonStyles,
  buttonStyles,
  disabledBtn,
} from './styles';

import Button from '@/components/Button';

interface ActionBtnsInterface {
  isNextBtnDisabled: boolean;
}

export const ActionBtns: FC<ActionBtnsInterface> = ({ isNextBtnDisabled }) => {
  const navigate = useNavigate();

  return (
    <Box sx={actionBtnsContainer}>
      <Button
        sx={backButtonStyles}
        label='Back'
        variant='outlined'
        onClick={() => navigate('/app/pre-arrival')}
      />
      <Button
        sx={isNextBtnDisabled ? buttonStyles : disabledBtn}
        label='Identity Verified'
        variant='colored'
        disabled={!isNextBtnDisabled}
        onClick={() => navigate('/app/boarding-pass-verification')}
      />
    </Box>
  );
};
