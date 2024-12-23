import { FC } from 'react';

import { Box } from '@mui/system';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

import { actionBtnsContainer, backButtonStyles, buttonStyles } from './styles';

import Button from '@/components/Button';

export const ActionBtns: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={actionBtnsContainer}>
      <Button
        sx={backButtonStyles}
        label={t('boardingPass.actionPanel.backBtn')}
        variant='outlined'
        onClick={() => navigate('/app/baggage-verification')}
      />
      <Button
        sx={buttonStyles}
        label={t('Customer informed')}
        variant='colored'
        onClick={() => navigate('/app/customer-confirmation')}
      />
    </Box>
  );
};