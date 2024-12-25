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

interface ActionBtnsProps {
  isDisabled: boolean;
}

export const ActionBtns: FC<ActionBtnsProps> = ({ isDisabled }) => {
  const navigate = useNavigate();

  return (
    <Box sx={actionBtnsContainer}>
      <Button
        sx={backButtonStyles}
        label={t('boardingPass.actionPanel.backBtn')}
        variant='outlined'
      />
      <Button
        sx={isDisabled ? disabledBtn : buttonStyles}
        label={t('Confirm')}
        variant='colored'
        disabled={isDisabled}
        onClick={() => navigate('/app/prohibited-items')}
      />
    </Box>
  );
};
