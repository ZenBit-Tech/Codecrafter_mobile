import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import {
  bagDetails,
  bagTitle,
  calculatorBlock,
  checkBaggageBlock,
  importantBlock,
  importantText,
  importantTitle,
  inputField,
  maxWeightTitle,
  totalWeightCount,
  totalWeightTitle,
  weightLabel,
} from './styles';
import { useGetCountOfLuggages } from './useGetCountOfLuggages';

import { InputField } from '@/pages/FailedReason/styles';

interface CheckBaggageProps {
  weight: number;
  calculateWeight: () => void;
}

export const CheckBaggageBlock: FC<CheckBaggageProps> = ({
  weight,
  calculateWeight,
}) => {
  const { luggages } = useGetCountOfLuggages();

  return (
    <Box sx={checkBaggageBlock}>
      <Typography sx={maxWeightTitle}>
        {t('checkBaggageBlock.maxWeightTitle')}
      </Typography>
      <Box sx={calculatorBlock}>
        {luggages.length > 0 &&
          luggages.map((luggage, index) => (
            <Box key={luggage.id}>
              <Typography sx={bagTitle}>
                {`${luggage.luggage_type} bag ${index + 1}`}
              </Typography>
              <Typography sx={bagDetails}>
                {t('checkBaggageBlock.bagDetails')}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={weightLabel}>
                  {t('checkBaggageBlock.weightLabel')}
                </Typography>
                <InputField
                  sx={inputField}
                  className='weight-field'
                  onChange={calculateWeight}
                  label=''
                  type='number'
                  variant='outlined'
                />
              </Box>
            </Box>
          ))}
        <Box
          sx={{
            width: '378px',
            marginLeft: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={totalWeightTitle}>Total</Typography>
          <Box sx={totalWeightCount}>{weight} KG</Box>
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
