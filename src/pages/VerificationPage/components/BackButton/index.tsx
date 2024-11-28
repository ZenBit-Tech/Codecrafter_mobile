import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { backButtonStyles } from '@/pages/VerificationPage/components/BackButton/styles';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={backButtonStyles} onClick={() => navigate('/')}>
      &lt;
    </Box>
  );
};

export default BackButton;
