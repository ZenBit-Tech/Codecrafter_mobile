import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  bagDetails,
  bagTitle,
  calculatorBlock,
  checkBaggageBlock,
  importantBlock,
  importantText,
  importantTitle,
  inputField,
  weightLabel,
} from './styles';

import { InputField } from '@/pages/FailedReason/styles';

export const CheckBaggageBlock: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={checkBaggageBlock}>
      <Box sx={calculatorBlock}>
        <Typography sx={bagTitle}>{t('checkBaggageBlock.bagTitle')}</Typography>
        <Typography sx={bagDetails}>
          {t('checkBaggageBlock.bagDetails')}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={weightLabel}>
            {t('checkBaggageBlock.weightLabel')}
          </Typography>
          <InputField
            sx={inputField}
            label=''
            type='number'
            variant='outlined'
          />
        </Box>
      </Box>
      <Box sx={importantBlock}>
        <Typography sx={importantTitle}>
          {t('checkBaggageBlock.importantTitle')}
        </Typography>
        <Typography sx={importantText}>
          {t('checkBaggageBlock.importantText1')}
        </Typography>
        <Typography sx={importantText}>
          {t('checkBaggageBlock.importantText2')}
        </Typography>
        <Typography sx={importantText}>
          {t('checkBaggageBlock.importantText3')}
        </Typography>
      </Box>
    </Box>
  );
};
