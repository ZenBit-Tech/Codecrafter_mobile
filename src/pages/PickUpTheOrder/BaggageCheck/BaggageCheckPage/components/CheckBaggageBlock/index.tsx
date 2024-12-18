import { FC } from 'react';

import { Box, Typography } from '@mui/material';

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
  return (
    <Box sx={checkBaggageBlock}>
      <Box sx={calculatorBlock}>
        <Typography sx={bagTitle}>Medium bag 1</Typography>
        <Typography sx={bagDetails}>Max 70 x 50 x 30 cm</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={weightLabel}>Weight</Typography>
          <InputField
            sx={inputField}
            label=''
            type='number'
            variant='outlined'
          />
        </Box>
      </Box>
      <Box sx={importantBlock}>
        <Typography sx={importantTitle}>Important ❗</Typography>
        <Typography sx={importantText}>
          Count the number of baggage items and weigh them.
        </Typography>
        <Typography sx={importantText}>
          - If the number and weight match the booking details, confirm it.
        </Typography>
        <Typography sx={importantText}>
          - If discrepancies exist, inform the customer to adjust the weight.
        </Typography>
      </Box>
    </Box>
  );
};
