import React from 'react';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import OTPInput from 'react-otp-input';

import {
  otpFocusStyle,
  otpInputContainerStyles,
  otpInputStyle,
  otpInputWrapperStyles,
  timeExpiryStyles,
} from '@/pages/VerificationPage/components/OTPInputSection/styles';

interface OTPInputSectionProps {
  otp: string;
  setOtp: (value: string) => void;
  timeLeft: number;
  focusedIndex: number | null;
  setFocusedIndex: (index: number | null) => void;
  numInputs: number;
}

const OTPInputSection: React.FC<OTPInputSectionProps> = ({
  otp,
  setOtp,
  timeLeft,
  focusedIndex,
  setFocusedIndex,
  numInputs,
}) => {
  const { t } = useTranslation();
  const isLargeScreen = useMediaQuery('(min-width:321px)');

  const twoDigitThreshold = 10;

  return (
    <Box sx={otpInputContainerStyles}>
      <Box sx={otpInputWrapperStyles}>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={numInputs}
          renderSeparator={<span>&nbsp;</span>}
          renderInput={(inputProps, index) => {
            const { style, ...rest } = inputProps;

            return (
              <input
                {...rest}
                style={{
                  ...style,
                  ...(focusedIndex === index ? otpFocusStyle : {}),
                }}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
              />
            );
          }}
          inputStyle={otpInputStyle(isLargeScreen)}
          inputType='number'
        />
      </Box>
      <Typography variant='body2' sx={timeExpiryStyles}>
        {timeLeft > 0
          ? t('verification.otpWillExpire', {
              time: timeLeft < twoDigitThreshold ? `0${timeLeft}` : timeLeft,
            })
          : t('verification.otpExpired')}
      </Typography>
    </Box>
  );
};

export default OTPInputSection;
