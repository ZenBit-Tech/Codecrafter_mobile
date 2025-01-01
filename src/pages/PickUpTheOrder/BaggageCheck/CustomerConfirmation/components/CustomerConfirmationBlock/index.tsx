import { ChangeEvent, FC } from 'react';

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

import Button from '@/components/Button';

interface CustomerConfirmationBlockProps {
  handleRemove: () => void;
  handleChangeCustomerFullName: (
    input: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCreateSign: (data: SignatureCanvas | null) => void;
  handleSignatureChange: () => void;
}

export const CustomerConfirmationBlock: FC<CustomerConfirmationBlockProps> = ({
  handleRemove,
  handleChangeCustomerFullName,
  handleCreateSign,
  handleSignatureChange,
}) => {
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
        onChange={handleChangeCustomerFullName}
      />
      <Box sx={signatureBox}>
        <SignatureCanvas
          penColor='green'
          ref={handleCreateSign}
          onEnd={handleSignatureChange}
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
