import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { InputField } from '@/pages/FailedReason/styles';

export const CheckBaggageBlock: FC = () => {
  return (
    <Box sx={{ marginTop: '87px' }}>
      <Box
        sx={{
          height: '175px',
          padding: '10px 3px',
          border: `1px solid ${COLORS.schemes.outlineVariant}`,
          width: '93vw',
          margin: '0 auto',
          borderRadius: '10px',
          marginBottom: '27px',
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.mediumPlus,
            fontWeight: FONT.fontWeight.large,
            color: COLORS.schemes.secondary,
            marginLeft: '10px',
          }}
        >
          Medium bag 1
        </Typography>
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            fontWeight: FONT.fontWeight.medium,
            color: COLORS.schemes.outline,
            marginLeft: '10px',
          }}
        >
          Max 70 x 50 x 30 cm
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              paddingLeft: '10px',
              fontFamily: FONT.family,
              fontSize: FONT.fontSize.medium,
              letterSpacing: '0.2px',
              color: COLORS.schemes.secondary,
              marginRight: '5px',
            }}
          >
            Weight
          </Typography>
          <InputField
            sx={{
              width: '60px',
              height: '32px',
              padding: '1px',
              '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                padding: '4px',
              },
            }}
            label=''
            type='number'
            variant='outlined'
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: '175px',
          padding: '10px 3px',
          border: `1px solid ${COLORS.schemes.outlineVariant}`,
          width: '93vw',
          margin: '0 auto',
          borderRadius: '10px',
          marginBottom: '27px',
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.mediumPlus,
            marginLeft: '10px',
          }}
        >
          Important ❗
        </Typography>
        <Typography
          sx={{
            paddingLeft: '10px',
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            letterSpacing: '0.2px',
            color: COLORS.schemes.secondary,
          }}
        >
          Count the number of baggage items and weigh them.
        </Typography>
        <Typography
          sx={{
            paddingLeft: '10px',
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            letterSpacing: '0.2px',
            color: COLORS.schemes.secondary,
          }}
        >
          - If the number and weight match the booking details, confirm it.
        </Typography>
        <Typography
          sx={{
            paddingLeft: '10px',
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            letterSpacing: '0.2px',
            color: COLORS.schemes.secondary,
          }}
        >
          - If discrepancies exist, informs the customer to adjust the weight
        </Typography>
      </Box>
    </Box>
  );
};
