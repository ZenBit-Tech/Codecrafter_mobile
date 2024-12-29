import { FC } from 'react';

import { t } from 'i18next';

import { DescriptionContainer, Title, TitleRow } from './styles';
import useBaggageCover from './useBaggageLoad';

import Button from '@/components/Button';
import Header from '@/components/Header';
import { iconLabel } from '@/constants/constants';
import { ButtonGroup, Container } from '@/pages/BaggageRecord/styles';
import useBaggageRecord from '@/pages/BaggageRecord/useBaggageRecord';
import StatusIcon from '@/pages/RouteDetails/components/StatusIcon';

const BaggageCoveringPage: FC = () => {
  const { handleBack } = useBaggageRecord();
  const { handleNextPage } = useBaggageCover();

  return (
    <>
      <Header pageName={t('baggage.loading.header')} hasBackIcon />
      <Container>
        <TitleRow>
          <StatusIcon status={iconLabel} />
          <Title variant='h2'>{t('baggage.loading.attention')}</Title>
        </TitleRow>

        <DescriptionContainer variant='body1'>
          {t('baggage.loading.description')}
        </DescriptionContainer>

        <ButtonGroup>
          <Button
            label={t('baggage.loading.back')}
            variant='linedGrey'
            fullWidth
            onClick={handleBack}
          />
          <Button
            label={t('baggage.loading.loading')}
            variant='colored'
            fullWidth
            onClick={handleNextPage}
          />
        </ButtonGroup>
      </Container>
    </>
  );
};

export default BaggageCoveringPage;
