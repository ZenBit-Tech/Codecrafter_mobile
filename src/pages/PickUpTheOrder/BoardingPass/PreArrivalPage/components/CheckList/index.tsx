import { FC } from 'react';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { t } from 'i18next';

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
        {t('checklist.title', 'Ensure you have the required equipment:')}
      </Typography>
      <Box sx={listContainer}>
        <ol style={listStyles}>
          {[
            'checklist.items.trolley',
            'checklist.items.smartphone',
            'checklist.items.scale',
            'checklist.items.baggageCovers',
            'checklist.items.smartLock',
            'checklist.items.cleanVest',
            'checklist.items.idBadge',
            'checklist.items.prohibitedItemsList',
          ].map((itemKey) => (
            <li key={itemKey} style={listItemStyles}>
              {t(itemKey)}
            </li>
          ))}
        </ol>
      </Box>
      <Typography sx={warningParagraph}>
        {t(
          'checklist.warning',
          'Confirm you lock the transport vehicle securely, ensuring safety as required by the LBA.'
        )}
      </Typography>
    </Box>
  );
};
