import { Box, Checkbox, Typography } from '@mui/material';
import { Dispatch, FC, SetStateAction } from 'react';

import {
  confirmInformContainer,
  confirmInformTitle,
  customerInformationContainer,
  customerProp,
  customerPropTitle,
  identityVerificationContainer,
  passportNotUploaded,
  passportUploaded,
  title,
} from './styles';
import './styles.css';
import { useGetCustomerInform } from './useGetCustomerInform';

interface CustomerInformInterface {
  handleChoose: Dispatch<SetStateAction<boolean>>;
}

export const CustomerInformBlock: FC<CustomerInformInterface> = ({
  handleChoose,
}) => {
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
            customer?.is_passport_uploaded
              ? passportUploaded
              : passportNotUploaded
          }
        >
          {customer?.is_passport_uploaded ? 'Uploaded' : 'Not Upploaded'}
        </Typography>
      </Box>
      <Box sx={confirmInformContainer}>
        <Checkbox
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChoose(event.target.checked);
          }}
        />
        <Typography sx={confirmInformTitle}>
          I confirm that information match
        </Typography>
      </Box>
    </Box>
  );
};
