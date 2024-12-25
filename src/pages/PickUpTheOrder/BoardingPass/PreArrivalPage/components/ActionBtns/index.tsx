import { FC } from 'react';

import { Box } from '@mui/system';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

import { actionBtnsContainer, backButtonStyles, buttonStyles } from './styles';

import Button from '@/components/Button';
import { useAppSelector } from '@/redux/hooks';

export const ActionBtns: FC = () => {
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const navigate = useNavigate();

  return (
    <Box sx={actionBtnsContainer}>
      <Button
        sx={backButtonStyles}
        label={t('boardingPass.actionPanel.backBtn')}
        variant='outlined'
        onClick={() => navigate(`/app/orders/${orderId}`)}
      />
      <Button
        sx={buttonStyles}
        label={t('boardingPass.actionPanel.transporterLocked')}
        variant='colored'
        onClick={() => navigate('/app/identity-verification')}
      />
    </Box>
  );
};
