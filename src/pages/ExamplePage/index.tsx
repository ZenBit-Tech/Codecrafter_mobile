import { ReactNode } from 'react';

import { t } from 'i18next';

import { ExampleWrapper } from './styles';
import useExamplePage from './useExamplePage';

import Button from '@/components/Button';

const ExamplePage = (): ReactNode => {
  const { clicked, handleClick } = useExamplePage();

  return (
    <ExampleWrapper>
      <h1>{t('pageTitle')}</h1>
      <h3>{clicked}</h3>
      <Button
        onClick={handleClick}
        label={t('submitExample')}
        variant='contained'
      />
    </ExampleWrapper>
  );
};

export default ExamplePage;
