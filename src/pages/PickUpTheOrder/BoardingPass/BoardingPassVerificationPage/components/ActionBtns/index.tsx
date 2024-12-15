import { Box } from '@mui/system';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  actionBtnsContainer,
  actionBtnsContainerLoading,
  backButtonStyles,
  disabledBtn,
  goNextBtn,
} from './styles';
import { useVerifyRequest } from './useVerifyRequest';

import Button from '@/components/Button';
import { usePassVerificationData } from '@/pages/PickUpTheOrder/BoardingPass/BoardingPassVerificationPage/index';

interface ActionBtnsInterface {
  isNextBtnDisabled: boolean;
}

export const ActionBtns: FC<ActionBtnsInterface> = ({ isNextBtnDisabled }) => {
  const navigate = useNavigate();
  const { isVerified, isOngoing, isVerifiedSuccessfully, verifyPassDispatch } =
    usePassVerificationData();
  const { verifyRequest } = useVerifyRequest();

  return (
    <Box sx={isOngoing ? actionBtnsContainerLoading : actionBtnsContainer}>
      {!isOngoing && (
        <>
          <Button
            sx={backButtonStyles}
            label='Back'
            variant='outlined'
            onClick={() => navigate('/app/identity-verification')}
          />
          {!isVerified ? (
            <Button
              sx={isNextBtnDisabled ? goNextBtn : disabledBtn}
              label='Verify boarding pass'
              variant='colored'
              disabled={!isNextBtnDisabled}
              onClick={async () => {
                verifyPassDispatch({
                  type: 'SET_LOADING',
                  payload: true,
                });
                const isVerifiedResponse = await verifyRequest();

                verifyPassDispatch({
                  type: 'SET_VERIFIED',
                  payload: true,
                });
                verifyPassDispatch({
                  type: 'SET_ACTIVE',
                  payload: isVerifiedResponse,
                });
                verifyPassDispatch({
                  type: 'SET_LOADING',
                  payload: false,
                });

                if (isVerifiedResponse) {
                  toast.success('Boarding pass Verified');
                } else {
                  toast.error('Boarding pass is NOT Verified');
                }
              }}
            />
          ) : (
            <Button
              sx={isNextBtnDisabled ? goNextBtn : disabledBtn}
              label={isVerifiedSuccessfully ? 'Next' : 'Send to dispatcher'}
              variant='colored'
              disabled={!isNextBtnDisabled}
              onClick={() => navigate('/app/identity-verification')}
            />
          )}
        </>
      )}
      {isOngoing && (
        <Button
          sx={disabledBtn}
          label='Verification'
          variant='colored'
          disabled
        />
      )}
    </Box>
  );
};
