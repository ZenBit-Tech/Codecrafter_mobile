import { Button, Typography } from '@mui/material';
import { t } from 'i18next';

import { googleMapsButtonStyles } from './styles';

import Modal from '@/components/Modal';
import { IModalProps } from '@/interfaces/Modal';

const NavigateButtonModal: React.FC<IModalProps> = ({
  open,
  handleClose,
}: IModalProps) => {
  return (
    <Modal
      open={open}
      title={t('modal.modalTitle')}
      description={
        <div>
          <Typography>{t('modal.modalConfirmation')}</Typography>
          <Typography>{t('modal.modalAttention')}</Typography>
        </div>
      }
      actions={
        <>
          <Button fullWidth onClick={handleClose} variant='text'>
            {t('modal.cancel')}
          </Button>
          <Button fullWidth variant='contained' sx={googleMapsButtonStyles}>
            {t('modal.modalGoogleMaps')}
          </Button>
        </>
      }
      onClose={handleClose}
    />
  );
};

export default NavigateButtonModal;
