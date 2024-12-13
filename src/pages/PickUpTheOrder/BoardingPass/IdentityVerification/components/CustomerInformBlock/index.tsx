import { Box, Checkbox, Typography } from '@mui/material';
import { FC } from 'react';

import {
  confirmInformContainer,
  confirmInformTitle,
  customerInformationContainer,
  customerProp,
  customerPropTitle,
  identityVerificationContainer,
  passportUnupploaded,
  passportUpploaded,
  title,
} from './styles';
import './styles.css';
import { useGetCustomerInform } from './useGetCustomerInform';

export const CustomerInformBlock: FC = () => {
  const { customer } = useGetCustomerInform();

  return (
    <Box sx={identityVerificationContainer}>
      <Typography sx={title}>
        Ask for the customer’s ID card or passport and verify the identity
        against the booking information
      </Typography>

      <Box sx={customerInformationContainer}>
        <Typography sx={customerPropTitle}>Customer name:</Typography>
        <Typography sx={customerProp}>{customer?.full_name}</Typography>

        <Typography sx={customerPropTitle}>Passport information:</Typography>
        <Typography
          sx={
            customer?.is_passport_upploaded
              ? passportUpploaded
              : passportUnupploaded
          }
        >
          {customer?.is_passport_upploaded ? 'Uploaded' : 'Not Upploaded'}
        </Typography>
      </Box>
      <Box sx={confirmInformContainer}>
        <Checkbox />
        <Typography sx={confirmInformTitle}>
          I confirm that information match
        </Typography>
      </Box>
    </Box>
  );
};
