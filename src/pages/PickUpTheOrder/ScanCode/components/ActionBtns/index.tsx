import { FC } from 'react';

import { Box } from '@mui/system';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

import { actionBtnsContainer, backButtonStyles, buttonStyles } from './styles';

import Button from '@/components/Button';
import { OrderStatuses } from '@/constants/status';
import { useChangeOrderStatus } from '@/hooks/useChangeOrderStatus';
import { useAppSelector } from '@/redux/hooks';

export const ActionBtns: FC = () => {
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const navigate = useNavigate();
  const { changeOrderStatus } = useChangeOrderStatus();

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
        label={t('Scan the lock')}
        variant='colored'
        onClick={() => {
          changeOrderStatus(
            orderId ? +orderId : 0,
            OrderStatuses.TRANSPORTER_LOCKED
          );
          navigate('/app/identity-verification');
        }}
      />
    </Box>
  );
};
