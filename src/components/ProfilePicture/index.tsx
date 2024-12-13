import { FC } from 'react';

import { Avatar } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { getInitials } from '@/utils/stringUtils';

interface ProfilePictureProps {
  username: string;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ username }) => {
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
