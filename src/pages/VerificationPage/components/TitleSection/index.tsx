import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  subtitleStyles,
  titleContainerStyles,
  titleStyles,
} from '@/pages/VerificationPage/components/TitleSection/styles';

const TitleSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={titleContainerStyles}>
      <Typography variant='h1' component='h1' sx={titleStyles}>
        {t('verification.title')}
      </Typography>
      <Typography variant='body2' sx={subtitleStyles}>
        {t('verification.description')}
      </Typography>
    </Box>
  );
};

export default TitleSection;
