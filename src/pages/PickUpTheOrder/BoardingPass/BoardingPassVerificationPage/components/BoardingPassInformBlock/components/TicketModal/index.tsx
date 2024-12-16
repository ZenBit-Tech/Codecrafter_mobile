import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

import { modalContainer } from './styles';

interface TicketModalInterface {
  ticketImageLink: string;
  children: ReactNode;
}

export const TicketModal: FC<TicketModalInterface> = ({
  ticketImageLink,
  children,
}) => {
  return (
    <Box sx={modalContainer}>
      {children}
      <img
        src={`${import.meta.env.VITE_BASE_URL}/tickets/${encodeURIComponent(ticketImageLink)}`}
        alt='ticket'
      />
    </Box>
  );
};
