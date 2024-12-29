import { FC } from 'react';

import { Box, TextField, Typography } from '@mui/material';
import { t } from 'i18next';
import SignatureCanvas from 'react-signature-canvas';

import {
  customerConfirmationBlock,
  importantBox,
  importantText,
  importantTitle,
  removeSignature,
  signatureBox,
  textField,
} from './styles';
import { useCustomerConfirm } from './useCustomerConfirm';

import Button from '@/components/Button';

export const CustomerConfirmationBlock: FC = () => {
  const { handleRemove, setSign } = useCustomerConfirm();

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
          ref={(data) => setSign(data)}
          canvasProps={{
            width: 500,
            height: 300,
            className: 'sigCanvas',
          }}
        />
        <Button
          onClick={handleRemove}
          label='x'
          sx={removeSignature}
          variant='text'
        />
      </Box>
    </Box>
  );
};
