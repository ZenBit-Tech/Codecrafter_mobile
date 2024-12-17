import { t } from 'i18next';

import { OrderedList, OrderedListItem } from './styles';

import Button from '@/components/Button';
import Header from '@/components/Header';
import { iconLabel } from '@/constants/constants';
import {
  DescriptionContainer,
  Title,
  TitleRow,
} from '@/pages/BaggageCover/styles';
import { ButtonGroup, Container } from '@/pages/BaggageRecord/styles';
import useBaggageRecord from '@/pages/BaggageRecord/useBaggageRecord';
import StatusIcon from '@/pages/RouteDetails/components/StatusIcon';

const BaggageLockingPage = (): JSX.Element => {
  const { handleBack } = useBaggageRecord();

  return (
    <>
      <Header pageName={t('baggage.lock.header')} hasBackIcon />
      <Container>
        <TitleRow>
          <StatusIcon status={iconLabel} />
          <Title variant='h2'>{t('baggage.lock.attention')}</Title>
        </TitleRow>

        <DescriptionContainer>
          <OrderedList>
            <OrderedListItem>{t('baggage.lock.firstRule')}</OrderedListItem>
            <OrderedListItem>{t('baggage.lock.secondRule')}</OrderedListItem>
          </OrderedList>
        </DescriptionContainer>

        <ButtonGroup>
          <Button
            label={t('baggage.lock.back')}
            variant='linedGrey'
            fullWidth
            onClick={handleBack}
          />
          <Button label={t('baggage.lock.lock')} variant='colored' fullWidth />
        </ButtonGroup>
      </Container>
    </>
  );
};

export default BaggageLockingPage;
