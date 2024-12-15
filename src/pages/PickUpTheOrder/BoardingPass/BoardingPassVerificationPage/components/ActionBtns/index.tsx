import { Box } from '@mui/system';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  actionBtnsContainer,
  backButtonStyles,
  disabledBtn,
  goNextBtn,
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
        onClick={() => navigate('/app/identity-verification')}
      />
      <Button
        sx={isNextBtnDisabled ? goNextBtn : disabledBtn}
        label='Verify boarding pass'
        variant='colored'
        disabled={!isNextBtnDisabled}
        onClick={() => navigate('/app/identity-verification')}
      />
    </Box>
  );
};
