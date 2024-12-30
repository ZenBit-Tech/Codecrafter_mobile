import { FC } from 'react';

import { Typography } from '@mui/material';
import { t } from 'i18next';

import { ActionBtns } from './components/ActionBtns';
import { titleStyles } from './styles';

import Header from '@/components/Header';
import { useAppSelector } from '@/redux/hooks';

const SmartLockSecuredPage: FC = () => {
  const { value: orderId } = useAppSelector((store) => store.choseOrder);

  return (
    <>
      <Header pageName='Smart lock secured' hasBackIcon />
      <Typography sx={titleStyles}>
        {t(`The Order No.${orderId} successfully locked`)}
      </Typography>
      <ActionBtns />
    </>
  );
};

export default SmartLockSecuredPage;
