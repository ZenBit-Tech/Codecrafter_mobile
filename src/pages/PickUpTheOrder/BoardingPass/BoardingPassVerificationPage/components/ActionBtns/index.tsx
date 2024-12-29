import { FC } from 'react';

import { Box } from '@mui/system';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

import {
  actionBtnsContainer,
  actionBtnsContainerLoading,
  backButtonStyles,
  disabledBtn,
  goNextBtn,
} from './styles';
import { useVerifyRequest } from './useVerifyRequest';

import Button from '@/components/Button';
import { OrderStatuses } from '@/constants/status';
import { useChangeOrderStatus } from '@/hooks/useChangeOrderStatus';
import { useAppSelector } from '@/redux/hooks';

interface ActionBtnsInterface {
  isNextBtnDisabled: boolean;
}

export const ActionBtns: FC<ActionBtnsInterface> = ({ isNextBtnDisabled }) => {
  const navigate = useNavigate();
  const { verifyRequest, isVerified, isOngoing, isVerifiedSuccessfully } =
    useVerifyRequest();
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const { changeOrderStatus } = useChangeOrderStatus();

  return (
    <Box sx={isOngoing ? actionBtnsContainerLoading : actionBtnsContainer}>
      {!isOngoing && (
        <>
          <Button
            sx={backButtonStyles}
            label={t('boardingPass.actionPanel.backBtn')}
            variant='outlined'
            onClick={() => navigate('/app/identity-verification')}
          />
          {!isVerified ? (
            <Button
              sx={isNextBtnDisabled ? goNextBtn : disabledBtn}
              label={t('boardingPass.actionPanel.verifyBtn')}
              variant='colored'
              disabled={!isNextBtnDisabled}
              onClick={verifyRequest}
            />
          ) : (
            <Button
              sx={isNextBtnDisabled ? goNextBtn : disabledBtn}
              label={
                isVerifiedSuccessfully
                  ? t('boardingPass.actionPanel.verifiedSuccessfully')
                  : t('boardingPass.actionPanel.verificationFailed')
              }
              variant='colored'
              disabled={!isNextBtnDisabled}
              onClick={() => {
                changeOrderStatus(
                  orderId ? +orderId : 0,
                  OrderStatuses.BOARDING_PASS_VERIFIED
                );
                navigate('/app/baggage-verification');
              }}
            />
          )}
        </>
      )}
      {isOngoing && (
        <Button
          sx={disabledBtn}
          label={t('boardingPass.actionPanel.loadingBtn')}
          variant='colored'
          disabled
        />
      )}
    </Box>
  );
};
