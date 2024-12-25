import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';

import { notificationBlockStyles, titleStyles } from './styles';

interface NotificationsGroupProps {
  title: string;
  notifications: React.ReactNode;
}

const NotificationsGroup: FC<NotificationsGroupProps> = ({
  title,
  notifications,
}) => {
  return (
    <Box sx={notificationBlockStyles}>
      <Typography sx={titleStyles}>{title}</Typography>
      {notifications}
    </Box>
  );
};

export default NotificationsGroup;
