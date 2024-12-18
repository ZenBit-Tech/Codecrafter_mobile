import { FC } from 'react';

import { Box, TextField, Typography } from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const CustomerConfirmationBlock: FC = () => {
  return (
    <Box sx={{ marginTop: '87px' }}>
      <Box
        sx={{
          height: '86px',
          padding: '10px 3px',
          border: `1px solid ${COLORS.schemes.outlineVariant}`,
          width: '93vw',
          margin: '0 auto',
          borderRadius: '10px',
          marginBottom: '27px',
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.mediumPlus,
            marginLeft: '10px',
          }}
        >
          Important ❗
        </Typography>
        <Typography
          sx={{
            paddingLeft: '10px',
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            letterSpacing: '0.2px',
            color: COLORS.schemes.secondary,
          }}
        >
          Count the number of baggage items and weigh them.
        </Typography>
      </Box>
      <TextField
        sx={{
          display: 'block',
          width: '93vw',
          margin: '0 auto 15px',
          '.css-1d6mh07-MuiInputBase-root-MuiOutlinedInput-root': {
            width: '93vw',
          },
        }}
        label='Full Name'
      />
      <Box
        sx={{
          border: `1px solid ${COLORS.schemes.outlineVariant}`,
          width: '93vw',
          height: '300px',
          overflow: 'hidden',
          margin: '0 auto',
          borderRadius: '5px',
          marginBottom: '15px',
        }}
      >
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
