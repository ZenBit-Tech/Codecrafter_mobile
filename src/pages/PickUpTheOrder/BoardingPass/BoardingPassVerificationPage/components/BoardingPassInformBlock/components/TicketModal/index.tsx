import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

import { COLORS } from '@/constants/colors';

interface TicketModalInterface {
  ticketImageLink: string;
  children: ReactNode;
}

export const TicketModal: FC<TicketModalInterface> = ({
  ticketImageLink,
  children,
}) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: COLORS.white,
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: 5,
      }}
    >
      {children}
      <img
        src={`${import.meta.env.VITE_BASE_URL}/tickets/${encodeURIComponent(ticketImageLink)}`}
        alt='ticket'
      />
    </Box>
  );
};
