import { Typography } from '@mui/material';
import { t } from 'i18next';
import { FC } from 'react';

import { BackIconWrapper, HeaderWrapper, StyledPageName } from './styles';

import BackIcon from '@/assets/icons/back.svg';
import ProfilePicture from '@/components/ProfilePicture';

interface HeaderProps {
  pageName: string;
  username: string;
  hasBackIcon?: boolean;
}

const Header: FC<HeaderProps> = ({
  pageName,
  username,
  hasBackIcon = false,
}) => {
  return (
    <HeaderWrapper>
      <BackIconWrapper hasBackIcon={hasBackIcon}>
        <img src={BackIcon} alt={t('back')} />
      </BackIconWrapper>
      <StyledPageName>
        <Typography variant='subtitle1'>{pageName}</Typography>
      </StyledPageName>
      <ProfilePicture username={username} />
    </HeaderWrapper>
  );
};

export default Header;
