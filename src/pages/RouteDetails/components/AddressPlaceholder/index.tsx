import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import { addressPlaceholderStyles } from './styles';

const AddressPlaceholder: React.FC = () => {
  return (
    <Box sx={addressPlaceholderStyles}>
      <Typography variant='h2'>
        {t('routes.errorAddressesPlaceholder')}
      </Typography>
    </Box>
  );
};

export default AddressPlaceholder;
