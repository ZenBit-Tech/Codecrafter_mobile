import { Box, Checkbox, Typography } from '@mui/material';
import { FC } from 'react';

import {
  boardingPassVerificationContainer,
  customerInformationContainer,
  title,
} from './styles';

import Button from '@/components/Button';
import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

interface BoardingPassInformInterface {
  customerName: string;
  departureDate: string;
  departureTime: string;
  airport: string;
  flightNumber: string;
}

export const BoardingPassInformBlock: FC<BoardingPassInformInterface> = ({
  customerName,
  departureDate,
  departureTime,
  airport,
  flightNumber,
}) => {
  return (
    <Box sx={boardingPassVerificationContainer}>
      <Typography sx={title}>
        Ask for the customer’s Boarding pass and verify it against the booking
        information
      </Typography>

      <Box sx={customerInformationContainer}>
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            fontWeight: FONT.fontWeight.large,
            marginLeft: '5px',
          }}
        >
          Customer name:
        </Typography>
        <Typography sx={{ color: COLORS.schemes.outline, marginLeft: '5px' }}>
          {customerName}
        </Typography>
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            fontWeight: FONT.fontWeight.large,
            marginLeft: '5px',
          }}
        >
          Departure date:
        </Typography>
        <Typography sx={{ color: COLORS.schemes.outline, marginLeft: '5px' }}>
          Date: {departureDate}
        </Typography>
        <Typography sx={{ color: COLORS.schemes.outline, marginLeft: '5px' }}>
          Time: {departureTime}
        </Typography>

        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            fontWeight: FONT.fontWeight.large,
            marginLeft: '5px',
          }}
        >
          Flight information:
        </Typography>
        <Typography sx={{ color: COLORS.schemes.outline, marginLeft: '5px' }}>
          Airport: {airport}
        </Typography>
        <Typography sx={{ color: COLORS.schemes.outline, marginLeft: '5px' }}>
          Flight: {flightNumber}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '30px',
          width: '92vw',
          margin: '0 auto',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            color: COLORS.schemes.outline,
          }}
        >
          Boarding pass uploaded
        </Typography>
        <Button
          sx={{
            width: '66px',
            height: '32px',
            border: `2px solid ${COLORS.purple}`,
            textTransform: 'capitalize',
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            color: COLORS.purple,
            fontWeight: FONT.fontWeight.large,
          }}
          label='show'
          variant='outlined'
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <Checkbox />
        <Typography
          sx={{
            fontFamily: FONT.family,
            fontSize: FONT.fontSize.medium,
            color: COLORS.schemes.outline,
          }}
        >
          I confirm that information match
        </Typography>
      </Box>
    </Box>
  );
};
