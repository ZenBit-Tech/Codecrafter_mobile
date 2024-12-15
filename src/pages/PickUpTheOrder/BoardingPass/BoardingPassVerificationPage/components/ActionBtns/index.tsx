import { Box } from '@mui/system';
import { FC } from 'react';
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

interface ActionBtnsInterface {
  isNextBtnDisabled: boolean;
}

export const ActionBtns: FC<ActionBtnsInterface> = ({ isNextBtnDisabled }) => {
  const navigate = useNavigate();
  const { verifyRequest, isVerified, isOngoing, isVerifiedSuccessfully } =
    useVerifyRequest();

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
              onClick={verifyRequest}
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
