import { FC } from 'react';

import { Typography } from '@mui/material';
import { t } from 'i18next';

import { InformCustomerWrapper } from './styles';

const InformCustomer: FC = () => {
  return (
    <InformCustomerWrapper>
      <Typography>{t('orderDetails.inform')}</Typography>
    </InformCustomerWrapper>
  );
};

export default InformCustomer;
