import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import prohibitedItems from '@/assets/icons/prohibiten-items.svg';
import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const ItemsBlock: FC = () => {
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
      <img
        style={{ marginBottom: '20px' }}
        src={prohibitedItems}
        alt='prohibitenItems'
      />
    </Box>
  );
};
