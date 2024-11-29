import { Backdrop, Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { COLORS } from '@/constants/colors.ts';
import { FONT } from '@/constants/font.ts';

interface RouteStartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  routeDetails: {
    id: string;
    distance: number;
    submissionDate: string;
    routeTime: string;
  };
}

export const RouteStartModal: React.FC<RouteStartModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  routeDetails,
}) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Backdrop
        open={isOpen}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: COLORS.boxShadow.dark,
          zIndex: 1000,
        }}
        onClick={onClose}
      />
      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '318px',
          height: '360px',
          p: 3,
          borderRadius: '15.9px',
          border: `1px solid ${COLORS.purple}`,
          zIndex: 1001,
        }}
      >
        <Typography
          variant='h6'
          align='center'
          sx={{
            mb: 1.5,
            fontWeight: FONT.fontWeight.large,
            color: COLORS.text.dark,
          }}
        >
          {t('route.startRouteTitle')}
        </Typography>

        <Typography
          variant='body1'
          align='left'
          sx={{
            mb: 2,
            fontWeight: FONT.fontWeight.large,
            fontSize: FONT.fontSize.large,
            color: COLORS.text.dark,
          }}
        >
          {t('route.startRouteDescription')}
        </Typography>

        <Box sx={{ mb: 3, textAlign: 'left' }}>
          <Typography
            variant='body2'
            sx={{
              mb: 0.5,
              fontWeight: FONT.fontWeight.large,
              fontSize: FONT.fontSize.large,
            }}
          >
            {t('route.route')}
            <span
              style={{
                fontWeight: FONT.fontWeight.small,
                color: COLORS.text.medium,
              }}
            >
              {`#${routeDetails.id}`}
            </span>
          </Typography>
          <Typography
            variant='body2'
            sx={{
              mb: 0.5,
              fontWeight: FONT.fontWeight.large,
              fontSize: FONT.fontSize.large,
            }}
          >
            {t('route.routeDistance')}
            <span
              style={{
                fontWeight: FONT.fontWeight.small,
                color: COLORS.text.medium,
              }}
            >
              {routeDetails.distance} {t('distance.km')}
            </span>
          </Typography>
          <Typography
            variant='body2'
            sx={{
              mb: 0.5,
              fontWeight: FONT.fontWeight.large,
              fontSize: FONT.fontSize.large,
            }}
          >
            {t('route.collectionDate')}
            <span
              style={{
                fontWeight: FONT.fontWeight.small,
                color: COLORS.text.medium,
              }}
            >
              {routeDetails.submissionDate}
            </span>
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontWeight: FONT.fontWeight.large,
              fontSize: FONT.fontSize.large,
            }}
          >
            {t('route.routeTime')}
            <span
              style={{
                fontWeight: FONT.fontWeight.small,
                color: COLORS.text.medium,
              }}
            >
              {routeDetails.routeTime}
            </span>
          </Typography>
        </Box>

        <Box display='flex' flexDirection='column' gap={2} alignItems='center'>
          <Button
            variant='contained'
            onClick={onConfirm}
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              fontWeight: FONT.fontWeight.medium,
              width: '173px',
              backgroundColor: COLORS.purple,
              '&:hover': {
                backgroundColor: COLORS.hoverPurple,
              },
              mt: 1,
            }}
          >
            {t('route.startButton')}
          </Button>

          <Button
            variant='outlined'
            onClick={onClose}
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              fontWeight: FONT.fontWeight.medium,
              width: '173px',
              color: COLORS.text.dark,
              borderColor: COLORS.text.dark,
              '&:hover': {
                borderColor: COLORS.background.logoBlock,
              },
            }}
          >
            {t('route.cancelButton')}
          </Button>
        </Box>
      </Paper>
    </>
  );
};
