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
        <Typography sx={customerPropTitle}>Customer name:</Typography>
        <Typography sx={customerProp}>{customerName}</Typography>

        <Typography sx={customerPropTitle}>Passport information:</Typography>
        <Typography
          sx={isIdInformUploaded ? passportUpploaded : passportUnupploaded}
        >
          {isIdInformUploaded ? 'Uploaded' : 'Not Upploaded'}
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
