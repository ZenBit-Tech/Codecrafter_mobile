import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import {
  importantBox,
  importantText,
  importantTitle,
  itemsBlock,
  prohibitedItemsImage,
} from './styles';

import prohibitedItems from '@/assets/icons/prohibiten-items.svg';

export const ItemsBlock: FC = () => {
  return (
    <Box sx={itemsBlock}>
      <Box sx={importantBox}>
        <Typography sx={importantTitle}>
          {t('itemsBlock.importantTitle')}
        </Typography>
        <Typography sx={importantText}>
          {t('itemsBlock.importantText')}
        </Typography>
      </Box>
      <img
        style={prohibitedItemsImage}
        src={prohibitedItems}
        alt={t('itemsBlock.prohibitedItemsAlt')}
      />
    </Box>
  );
};
