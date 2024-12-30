import { Dispatch, FC, SetStateAction } from 'react';

import { Box } from '@mui/system';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

import { actionBtnsContainer, backButtonStyles, buttonStyles } from './styles';

import Button from '@/components/Button';
// import { OrderStatuses } from '@/constants/status';
// import { useChangeOrderStatus } from '@/hooks/useChangeOrderStatus';
import { useAppSelector } from '@/redux/hooks';

interface ActionBtnsProps {
  setEnabled: Dispatch<SetStateAction<boolean>>;
}

export const ActionBtns: FC<ActionBtnsProps> = ({ setEnabled }) => {
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const navigate = useNavigate();
  // const { changeOrderStatus } = useChangeOrderStatus();

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
          setEnabled(true);
        }}
      />
    </Box>
  );
};
