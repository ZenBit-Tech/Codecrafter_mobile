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
import { OrderStatuses } from '@/constants/status';
import { useChangeOrderStatus } from '@/hooks/useChangeOrderStatus';
import { useAppSelector } from '@/redux/hooks';

interface ActionBtnsProps {
  isDisabled: boolean;
}

export const ActionBtns: FC<ActionBtnsProps> = ({ isDisabled }) => {
  const navigate = useNavigate();
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const { changeOrderStatus } = useChangeOrderStatus();

  return (
    <Box sx={actionBtnsContainer}>
      <Button
        sx={backButtonStyles}
        label={t('boardingPass.actionPanel.backBtn')}
        variant='outlined'
        onClick={() => navigate('/app/boarding-pass-verification')}
      />
      <Button
        sx={isDisabled ? disabledBtn : buttonStyles}
        label={t('Confirm')}
        variant='colored'
        disabled={isDisabled}
        onClick={() => {
          changeOrderStatus(
            orderId ? +orderId : 0,
            OrderStatuses.BAGGAGE_CONFIRMED
          );
          navigate('/app/prohibited-items');
        }}
      />
    </Box>
  );
};
