import { FC } from 'react';

import { Avatar } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { useAppSelector } from '@/redux/hooks';
import { getInitials } from '@/utils/stringUtils';

const ProfilePicture: FC<{ isLarge?: boolean }> = ({ isLarge }) => {
  const username = useAppSelector((state) => state.auth.user?.full_name);
  const initials = getInitials(username);

  return (
    <Avatar
      sx={{
        // TODO replace by util
        width: isLarge ? '90px' : '38px',
        height: isLarge ? '90px' : '38px',
        bgcolor: COLORS.transparentViolet,
        color: COLORS.purple,
        fontSize: FONT.fontSize.medium,
      }}
    >
      {initials}
    </Avatar>
  );
};

export default ProfilePicture;
