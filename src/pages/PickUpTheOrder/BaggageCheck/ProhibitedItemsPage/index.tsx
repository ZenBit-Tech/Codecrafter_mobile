import { FC } from 'react';

import { t } from 'i18next';

import { ActionBtns } from './components/ActionBtns';
import { ItemsBlock } from './components/ItemsBlock';

import Header from '@/components/Header';

export const ProhibitedItemsPage: FC = () => {
  return (
    <>
      <Header pageName={t('Prohibited items  ')} hasBackIcon />
      <ItemsBlock />
      <ActionBtns />
    </>
  );
};
