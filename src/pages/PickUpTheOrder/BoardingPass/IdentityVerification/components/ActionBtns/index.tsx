import { FC } from 'react';

import { Box } from '@mui/system';
import { t } from 'i18next';
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
        label={t('boardingPass.actionPanel.backBtn')}
        variant='outlined'
        onClick={() => navigate('/app/pre-arrival')}
      />
      <Button
        sx={isNextBtnDisabled ? buttonStyles : disabledBtn}
        label={t('boardingPass.actionPanel.identityVerified')}
        variant='colored'
        disabled={!isNextBtnDisabled}
        onClick={() => navigate('/app/boarding-pass-verification')}
      />
    </Box>
  );
};
