import { Box, Checkbox, Typography } from '@mui/material';
import { FC } from 'react';

import {
  customerInformationContainer,
  identityVerificationContainer,
  title,
} from './styles';
import './styles.css';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

interface CustomerIdInform {
  customerName: string;
  isIdInformUploaded: boolean;
}

export const CustomerInformBlock: FC<CustomerIdInform> = ({
  customerName,
  isIdInformUploaded,
}) => {
  return (
    <Box sx={identityVerificationContainer}>
      <Typography sx={title}>
        Ask for the customer’s ID card or passport and verify the identity
        against the booking information
      </Typography>

      <Box sx={customerInformationContainer}>
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            fontWeight: FONT.fontWeight.large,
            marginLeft: '5px',
          }}
        >
          Customer name:
        </Typography>
        <Typography sx={{ color: COLORS.schemes.outline, marginLeft: '5px' }}>
          {customerName}
        </Typography>
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            fontWeight: FONT.fontWeight.large,
            marginLeft: '5px',
          }}
        >
          Passport information:
        </Typography>
        <Typography
          sx={
            isIdInformUploaded
              ? {
                  width: '82px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '5px',
                  background: COLORS.backgroundGreen,
                  color: COLORS.green,
                }
              : {}
          }
        >
          {isIdInformUploaded ? 'Uploaded' : 'Not Upploaded'}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <Checkbox />
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            color: COLORS.schemes.outline,
          }}
        >
          I confirm that information match
        </Typography>
      </Box>
    </Box>
  );
};
