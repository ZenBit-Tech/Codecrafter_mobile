import React from 'react';

import { Box, Container, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import keyLogo from '@/assets/login/key.png';
import lockLogo from '@/assets/login/lock.png';
import loginLogo from '@/assets/login/logo.svg';
import Button from '@/components/Button';
import Logo from '@/pages/SignIn/components/LoginLogo';
import TextInputWithRef from '@/pages/SignIn/components/TextInputRef';
import {
  containerStyles,
  inputBoxStyles,
  leftBoxStyles,
  mainBoxStyles,
  rightBoxStyles,
} from '@/pages/SignIn/styles';
import useSignIn from '@/pages/SignIn/useSignIn';

const SignInPage: React.FC = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    errors,
    isValid,
    isLocked,
    onSubmit,
    getHelperText,
    emailRegex,
    clearErrorOnChange,
  } = useSignIn();

  return (
    <Container maxWidth={false} sx={containerStyles} disableGutters>
      <Box sx={mainBoxStyles}>
        <Box sx={leftBoxStyles}>
          <Logo
            mainImage={loginLogo}
            topLeftImage={keyLogo}
            bottomRightImage={lockLogo}
          />
        </Box>

        <Box sx={rightBoxStyles}>
          <Typography sx={{ alignItems: 'start' }} gutterBottom variant='h2'>
            {t('signin.welcomeMessage')}
          </Typography>
          <Typography sx={{ alignItems: 'start' }} gutterBottom variant='body1'>
            {t('signin.instructions')}
          </Typography>
          <Box sx={inputBoxStyles}>
            {isLocked && (
              <Typography color='error'>
                {t('signin.error.accountLocked')}
              </Typography>
            )}

            <Controller
              name='email'
              control={control}
              rules={{
                required: t('signin.error.required'),
                pattern: {
                  value: emailRegex,
                  message: t('signin.error.invalidFormat'),
                },
              }}
              render={({ field }) => (
                <TextInputWithRef
                  {...field}
                  label={t('signin.email')}
                  type='email'
                  error={!!errors.email || !!getHelperText()}
                  helperText={getHelperText()}
                  onChange={(e) => {
                    field.onChange(e);
                    clearErrorOnChange();
                  }}
                />
              )}
            />

            <Button
              label={t('signin.submit')}
              variant='colored'
              fullWidth
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid || isLocked}
            />
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default SignInPage;
