import {
  Backdrop,
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

import CancelOutlined from '@/assets/icons/cancel.png';
import { COLORS } from '@/constants/colors.ts';
import { FONT } from '@/constants/font.ts';

interface UniversalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export const UniversalModal: React.FC<UniversalModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  content,
  confirmButtonText = 'Start',
  cancelButtonText = 'Cancel',
}) => {
  if (!isOpen) return null;

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
          width: '320px',
          padding: '24px',
          borderRadius: '16px',
          border: `1px solid ${COLORS.purple}`,
          backgroundColor: COLORS.white,
          zIndex: 1001,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontWeight: FONT.fontWeight.large,
              color: COLORS.text.dark,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: COLORS.text.dark,
              padding: 0,
            }}
          >
            <img
              src={CancelOutlined}
              alt='Cancel'
              style={{ width: '12px', height: '12px' }}
            />
          </IconButton>
        </Box>

        {description && (
          <Typography
            variant='body1'
            sx={{
              mb: 3,
              fontWeight: FONT.fontWeight.large,
              fontSize: FONT.fontSize.large,
            }}
          >
            {description}
          </Typography>
        )}

        {content && <Box sx={{ mb: 3 }}>{content}</Box>}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            variant='text'
            onClick={onClose}
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              fontWeight: FONT.fontWeight.medium,
              width: '48%',
              color: COLORS.purple,
              '&:hover': { backgroundColor: 'transparent' },
            }}
          >
            {cancelButtonText}
          </Button>
          <Button
            variant='contained'
            onClick={onConfirm}
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              fontWeight: FONT.fontWeight.medium,
              width: '48%',
              backgroundColor: COLORS.purple,
              color: COLORS.white,
              '&:hover': { backgroundColor: COLORS.hoverPurple },
            }}
          >
            {confirmButtonText}
          </Button>
        </Box>
      </Paper>
    </>
  );
};
