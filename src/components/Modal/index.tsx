import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal as MuiModal,
  Typography,
} from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';

import {
  buttonContainerStyles,
  headerStyles,
  iconButtonStyles,
  modalStyles,
} from './styles';

interface ModalProps {
  open: boolean;
  title: string;
  description: string | React.ReactNode;
  actions?: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  description,
  actions,
  onClose,
}: ModalProps) => {
  return (
    <MuiModal
      aria-labelledby='custom-modal-title'
      aria-describedby='custom-modal-description'
      open={open}
      onClose={onClose}
      closeAfterTransition={false}
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 200 } }}
    >
      <Fade in={open}>
        <Box sx={modalStyles}>
          <Box sx={headerStyles}>
            <Typography id='custom-modal-title' variant='h2' component='h2'>
              {title}
            </Typography>
            <IconButton onClick={onClose} sx={iconButtonStyles} size='medium'>
              <IoCloseOutline />
            </IconButton>
          </Box>
          <Box id='custom-modal-description' mb={3}>
            {typeof description === 'string' ? (
              <Typography>{description}</Typography>
            ) : (
              description
            )}
          </Box>
          {actions && (
            <Box sx={buttonContainerStyles} gap={2}>
              {actions}
            </Box>
          )}
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
