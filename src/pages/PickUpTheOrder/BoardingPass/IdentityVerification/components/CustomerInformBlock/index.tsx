import { Box, Checkbox, Typography } from '@mui/material';
import { t } from 'i18next';
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
        {t('boardingPass.titles.identityVerificationPage')}
      </Typography>

      <Box sx={customerInformationContainer}>
        <Typography sx={customerPropTitle}>
          {t('boardingPass.informProps.customerName')}
        </Typography>
        <Typography sx={customerProp}>{customer?.full_name}</Typography>

        <Typography sx={customerPropTitle}>
          {t('boardingPass.informProps.passportInform')}
        </Typography>
        <Typography
          sx={
            customer?.is_passport_uploaded
              ? passportUploaded
              : passportNotUploaded
          }
        >
          {customer?.is_passport_uploaded
            ? t('boardingPass.passportUploaded.uploaded')
            : t('boardingPass.passportUploaded.notUploaded')}
        </Typography>
      </Box>
      <Box sx={confirmInformContainer}>
        <Checkbox
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChoose(event.target.checked);
          }}
        />
        <Typography sx={confirmInformTitle}>
          {t('boardingPass.confirmation')}
        </Typography>
      </Box>
    </Box>
  );
};
