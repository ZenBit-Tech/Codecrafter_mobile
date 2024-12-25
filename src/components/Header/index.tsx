import { FC } from 'react';

import { Typography } from '@mui/material';
import { t } from 'i18next';
import { Link, useNavigate } from 'react-router-dom';

import { BackIconWrapper, HeaderWrapper, StyledPageName } from './styles';

import BackIcon from '@/assets/icons/back.svg';
import ProfilePicture from '@/components/ProfilePicture';
import { FONT } from '@/constants/font';
import { PREVIOUS_PAGE } from '@/constants/numbers';

interface HeaderProps {
  pageName: string;
  hasBackIcon?: boolean;
}
const Header: FC<HeaderProps> = ({ pageName, hasBackIcon = false }) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <BackIconWrapper
        onClick={() => navigate(PREVIOUS_PAGE)}
        hasBackIcon={hasBackIcon}
      >
        <img src={BackIcon} alt={t('back')} />
      </BackIconWrapper>
      <StyledPageName>
        <Typography
          sx={{ fontSize: FONT.fontSize.mediumPlus }}
          variant='subtitle1'
        >
          {pageName}
        </Typography>
      </StyledPageName>
      <Link to='../personal-profile'>
        <ProfilePicture />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
