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
  const navigate = useNavigate();
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const { changeOrderStatus } = useChangeOrderStatus();

  return (
    <Box sx={actionBtnsContainer}>
      <Button
        sx={backButtonStyles}
        label={t('boardingPass.actionPanel.backBtn')}
        variant='outlined'
        onClick={() => navigate('/app/prohibited-items')}
      />
      <Button
        sx={buttonStyles}
        label={t('Confirm')}
        variant='colored'
        onClick={() => {
          changeOrderStatus(
            orderId ? +orderId : 0,
            OrderStatuses.CUSTOMER_CONFIRMED
          );
          navigate('/app/identity-verification');
        }}
      />
    </Box>
  );
};
