import { FC } from 'react';

import { Avatar } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { useAppSelector } from '@/redux/hooks';
import { getInitials } from '@/utils/stringUtils';

const ProfilePicture: FC = () => {
  const username = useAppSelector((state) => state.auth.user?.full_name);
  const initials = getInitials(username);

  return (
    <Avatar
      sx={{
        width: '38px',
        height: '38px',
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
