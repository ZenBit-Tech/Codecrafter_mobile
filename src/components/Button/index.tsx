import React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/redux/hooks';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  label: string;
  variant:
    | 'text'
    | 'outlined'
    | 'contained'
    | 'colored'
    | 'lined'
    | 'linedGrey'
    | 'outlineVariant'
    | 'grey';
}

const Button: React.FC<ButtonProps> = ({ label, variant, ...props }) => {
  const { t } = useTranslation();
  const { isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <LoadingButton loading variant='outlineVariant' {...props}>
        {t('Loading...')}
      </LoadingButton>
    );
  }

  return (
    <MuiButton variant={variant} {...props}>
      {t(label)}
    </MuiButton>
  );
};

export default Button;
