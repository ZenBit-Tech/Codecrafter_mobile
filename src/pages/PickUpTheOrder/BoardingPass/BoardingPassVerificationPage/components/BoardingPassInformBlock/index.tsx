import { Box, Checkbox, Typography } from '@mui/material';
import { FC } from 'react';

import {
  boardingPassVerificationContainer,
  confirmInformContainer,
  confirmInformTitle,
  customerInformationContainer,
  customerProp,
  customerPropTitle,
  showTicketBtn,
  showTicketContainer,
  showTicketTitle,
  title,
} from './styles';

import Button from '@/components/Button';

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
}) => (
  <Box sx={boardingPassVerificationContainer}>
    <Typography sx={title}>
      Ask for the customer’s Boarding pass and verify it against the booking
      information
    </Typography>

    <Box sx={customerInformationContainer}>
      <Typography sx={customerPropTitle}>Customer name:</Typography>
      <Typography sx={customerProp}>{customerName}</Typography>

      <Typography sx={customerPropTitle}>Departure date:</Typography>
      <Typography sx={customerProp}>Date: {departureDate}</Typography>
      <Typography sx={customerProp}>Time: {departureTime}</Typography>

      <Typography sx={customerPropTitle}>Flight information:</Typography>
      <Typography sx={customerProp}>Airport: {airport}</Typography>
      <Typography sx={customerProp}>Flight: {flightNumber}</Typography>
    </Box>

    <Box sx={showTicketContainer}>
      <Typography sx={showTicketTitle}>Boarding pass uploaded</Typography>
      <Button sx={showTicketBtn} label='show' variant='outlined' />
    </Box>

    <Box sx={confirmInformContainer}>
      <Checkbox />
      <Typography sx={confirmInformTitle}>
        I confirm that information match
      </Typography>
    </Box>
  </Box>
);
