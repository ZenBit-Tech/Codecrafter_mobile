import { FC } from 'react';

import { Box, TextField, Typography } from '@mui/material';
import { t } from 'i18next';
import SignatureCanvas from 'react-signature-canvas';

import {
  customerConfirmationBlock,
  importantBox,
  importantText,
  importantTitle,
  signatureBox,
  textField,
} from './styles';

export const CustomerConfirmationBlock: FC = () => {
  return (
    <Box sx={customerConfirmationBlock}>
      <Box sx={importantBox}>
        <Typography sx={importantTitle}>
          {t('customerConfirmationBlock.importantTitle')}
        </Typography>
        <Typography sx={importantText}>
          {t('customerConfirmationBlock.importantText')}
        </Typography>
      </Box>
      <TextField
        sx={textField}
        label={t('customerConfirmationBlock.fullNameLabel')}
      />
      <Box sx={signatureBox}>
        <SignatureCanvas
          penColor='green'
          canvasProps={{
            width: 500,
            height: 300,
            className: 'sigCanvas',
          }}
        />
      </Box>
    </Box>
  );
};
