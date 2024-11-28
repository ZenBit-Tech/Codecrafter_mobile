import { Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import {
  containerStyles,
  headingStyles,
  messageStyles,
} from '@/pages/NotFound/styles';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRedirect = (): void => {
    navigate('/');
  };

  return (
    <Container sx={containerStyles}>
      <Typography variant='h1' sx={headingStyles}>
        {t('notFound.header')}
      </Typography>
      <Typography variant='subtitle1' sx={messageStyles}>
        {t('notFound.errorMessage')}
      </Typography>
      <Button
        variant='colored'
        onClick={handleRedirect}
        label={t('notFound.button')}
      />
    </Container>
  );
};

export default NotFoundPage;
