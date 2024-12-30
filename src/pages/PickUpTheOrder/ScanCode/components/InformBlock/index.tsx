import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import {
  listContainer,
  listItemStyles,
  listStyles,
  title,
  warnBlockStyles,
  warnIconStyles,
} from './styles';

import warnIcon from '@/assets/icons/warn-icon.svg';

const InformBlock: FC = () => {
  return (
    <Box sx={warnBlockStyles}>
      <Typography sx={title}>
        <img style={warnIconStyles} src={warnIcon} alt='warnIcon' />
        {t('Important')}
      </Typography>
      <Box sx={listContainer}>
        <ol style={listStyles}>
          {[
            'Lock the Smartporter’s protective cover using the Smart lock ',
            'Scan the Smart Lock to generate the secure code to customer and authorized airport personnel',
          ].map((itemKey) => (
            <li key={itemKey} style={listItemStyles}>
              {t(itemKey)}
            </li>
          ))}
        </ol>
      </Box>
    </Box>
  );
};

export default InformBlock;
