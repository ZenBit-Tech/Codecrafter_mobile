import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { resendLinkStyles } from '@/pages/VerificationPage/components/ResendLink/styles';

interface ResendLinkProps {
  handleResendCode: () => void;
}

const ResendLink: React.FC<ResendLinkProps> = ({ handleResendCode }) => {
  const { t } = useTranslation();

  return (
    <Box sx={resendLinkStyles} onClick={handleResendCode}>
      {t('verification.resendCode')}
    </Box>
  );
};

export default ResendLink;
