import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import Button from '@/components/Button';
import BackButton from '@/pages/VerificationPage/components/BackButton';
import OTPInputSection from '@/pages/VerificationPage/components/OTPInputSection';
import ResendLink from '@/pages/VerificationPage/components/ResendLink';
import TitleSection from '@/pages/VerificationPage/components/TitleSection';
import {
  containerStyles,
  submitButtonStyles,
} from '@/pages/VerificationPage/styles';
import useVerification from '@/pages/VerificationPage/useVerification';

const numInputs = 6;
const otpExpiryTime = 59;

const VerificationPage: React.FC = () => {
  const {
    focusedIndex,
    handleSubmit,
    handleResendCode,
    otp,
    setOtp,
    timeLeft,
    setFocusedIndex,
    isLocked,
  } = useVerification(otpExpiryTime, numInputs);

  const { t } = useTranslation();

  return (
    <Box sx={containerStyles}>
      <BackButton />
      <TitleSection />
      <OTPInputSection
        otp={otp}
        setOtp={setOtp}
        timeLeft={timeLeft}
        focusedIndex={focusedIndex}
        setFocusedIndex={setFocusedIndex}
        numInputs={numInputs}
      />
      <ResendLink handleResendCode={handleResendCode} />
      <Button
        label={t('verification.submitButton')}
        variant='colored'
        color='primary'
        sx={submitButtonStyles}
        onClick={handleSubmit}
        disabled={isLocked}
      />
      <ToastContainer />
    </Box>
  );
};

export default VerificationPage;
