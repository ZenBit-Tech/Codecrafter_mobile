import React from 'react';

import { Box } from '@mui/material';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

import BackIcon from '@/assets/icons/back.svg';
import { backButtonStyles } from '@/pages/VerificationPage/components/BackButton/styles';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={backButtonStyles} onClick={() => navigate('/')}>
      <img src={BackIcon} alt={t('back')} />
    </Box>
  );
};

export default BackButton;
