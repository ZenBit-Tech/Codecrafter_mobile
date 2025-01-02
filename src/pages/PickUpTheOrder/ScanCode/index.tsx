import { FC } from 'react';

import { Box } from '@mui/material';
import { t } from 'i18next';

import './styles.css';

import { ActionBtns } from './components/ActionBtns';
import InformBlock from './components/InformBlock';
import { scanBlock, scanTitleBlock } from './styles';
import { useScanLock } from './useScanLock';

import Header from '@/components/Header';

const ScanCode: FC = () => {
  const { isEnabled, setEnabled } = useScanLock();

  return (
    <>
      <Header pageName='Locking the baggage' hasBackIcon />
      <InformBlock />
      <ActionBtns setEnabled={setEnabled} />
      <Box sx={isEnabled ? scanBlock : {}}>
        {isEnabled && <Box sx={scanTitleBlock}>{t('Scan the code')}</Box>}
        <div id='qrCodeContainer' />
      </Box>
    </>
  );
};

export default ScanCode;
