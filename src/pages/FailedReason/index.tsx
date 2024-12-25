import React from 'react';

import { Box } from '@mui/system';
import { t } from 'i18next';
import { useParams } from 'react-router-dom';

import {
  ActionContainer,
  ButtonContainer,
  Container,
  InputField,
  ReasonButton,
  Subtitle,
  Title,
} from './styles';
import useFailedReason from './useFailedReason';

import Button from '@/components/Button';
import Header from '@/components/Header';
import {
  reasonBagsNotReady,
  reasonNotAvailable,
  reasonOther,
  tBase,
} from '@/constants/constants';

const FailureReportPage = (): React.JSX.Element => {
  const { id } = useParams();
  const orderId = Number(id);

  const {
    selectedReason,
    register,
    errors,
    isSendDisabled,
    handleReasonClick,
    handleCancel,
    validationRules,
    handleSubmit,
  } = useFailedReason(orderId);

  return (
    <>
      <Header pageName={t(`${tBase}.pageTitle`)} hasBackIcon />
      <Container>
        <Title variant='h6'>{t(`${tBase}.reportTitle`)}</Title>
        <Subtitle variant='body1'>{t(`${tBase}.reportSubtitle`)}</Subtitle>
        <ButtonContainer>
          <ReasonButton
            label={t(reasonNotAvailable)}
            variant={
              selectedReason === t(reasonNotAvailable) ? 'lined' : 'linedGrey'
            }
            onClick={() => handleReasonClick(t(reasonNotAvailable))}
          />
          <ReasonButton
            label={t(reasonBagsNotReady)}
            variant={
              selectedReason === t(reasonBagsNotReady) ? 'lined' : 'linedGrey'
            }
            onClick={() => handleReasonClick(t(reasonBagsNotReady))}
          />
          <ReasonButton
            label={t(reasonOther)}
            variant={selectedReason === t(reasonOther) ? 'lined' : 'linedGrey'}
            onClick={() => handleReasonClick(t(reasonOther))}
          />
          {selectedReason === t(reasonOther) && (
            <Box component='form' sx={{ marginTop: 2 }}>
              <InputField
                {...register('customReason', validationRules)}
                label={t(`${tBase}.reasons.explain`)}
                variant='outlined'
                fullWidth
                multiline
                minRows={3}
                error={!!errors.customReason}
                helperText={errors.customReason?.message}
              />
            </Box>
          )}
        </ButtonContainer>
        <ActionContainer>
          <Button
            label={t(`${tBase}.actions.cancel`)}
            variant='linedGrey'
            onClick={handleCancel}
            fullWidth
          />
          <Button
            label={t(`${tBase}.actions.send`)}
            variant={isSendDisabled ? 'outlineVariant' : 'colored'}
            disabled={isSendDisabled}
            onClick={handleSubmit}
            fullWidth
          />
        </ActionContainer>
      </Container>
    </>
  );
};

export default FailureReportPage;
