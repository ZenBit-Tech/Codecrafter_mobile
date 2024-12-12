import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

import {
  checkListBlockStyles,
  listContainer,
  listItemStyles,
  listStyles,
  title,
  warningParagraph,
} from './styles';

export const CheckList: FC = () => {
  return (
    <Box sx={checkListBlockStyles}>
      <Typography sx={title}>
        Ensure you have the required equipment:
      </Typography>
      <Box sx={listContainer}>
        <ol style={listStyles}>
          <li style={listItemStyles}>Trolley</li>
          <li style={listItemStyles}>Smartphone</li>
          <li style={listItemStyles}>Scale for weighing baggage</li>
          <li style={listItemStyles}>Baggage covers</li>
          <li style={listItemStyles}>Smartporters‘ Smart lock </li>
          <li style={listItemStyles}>Clean Vest with logos</li>
          <li style={listItemStyles}>ID badge</li>
          <li style={listItemStyles}>
            Printed list of prohibited items with pictures
          </li>
        </ol>
      </Box>
      <Typography sx={warningParagraph}>
        Confirm you lock the transport vehicle securely, ensuring safety as
        required by the LBA.
      </Typography>
    </Box>
  );
};
