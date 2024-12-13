import { FC } from 'react';

import { Typography } from '@mui/material';
import { t } from 'i18next';

import { BackIconWrapper, HeaderWrapper, StyledPageName } from './styles';

import BackIcon from '@/assets/icons/back.svg';
import ProfilePicture from '@/components/ProfilePicture';

interface HeaderProps {
  pageName: string;
  hasBackIcon?: boolean;
}

const Header: FC<HeaderProps> = ({ pageName, hasBackIcon = false }) => {
  return (
    <HeaderWrapper>
      <BackIconWrapper hasBackIcon={hasBackIcon}>
        <img src={BackIcon} alt={t('back')} />
      </BackIconWrapper>
      <StyledPageName>
        <Typography variant='subtitle1'>{pageName}</Typography>
      </StyledPageName>
      <ProfilePicture />
    </HeaderWrapper>
  );
};

export default Header;
