import { FC } from 'react';

import { t } from 'i18next';

import {
  ButtonGroup,
  Container,
  DescriptionContainer,
  Title,
  TitleRow,
} from './styles';

import Button from '@/components/Button';
import Header from '@/components/Header';
import { iconLabel } from '@/constants/constants';
import StatusIcon from '@/pages/RouteDetails/components/StatusIcon';

const BaggageCoveringPage: FC = () => {
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
          />
          <Button
            label={t('baggage.loading.loading')}
            variant='colored'
            fullWidth
          />
        </ButtonGroup>
      </Container>
    </>
  );
};

export default BaggageCoveringPage;
