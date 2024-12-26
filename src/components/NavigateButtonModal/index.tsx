import { Button, Typography } from '@mui/material';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { googleMapsButtonStyles } from './styles';

import Modal from '@/components/Modal';
import { IModalProps } from '@/interfaces/Modal';
import {
  createGoogleMapsUrl,
  formatLocationParam,
  isMobileDevice,
} from '@/utils/googleMapsUtils';

interface GoogleMapsButtonProps extends IModalProps {
  destination: { lat: number; lng: number } | string | undefined;
  origin?: { lat: number; lng: number } | string | undefined;
}

const NavigateButtonModal: React.FC<GoogleMapsButtonProps> = ({
  open,
  handleClose,
  destination,
  origin,
}: GoogleMapsButtonProps) => {
  const handleNavigation = (): void => {
    if (!destination) {
      toast.error(t('Destination address is not defined! Please try again'));
      handleClose();

      return;
    }

    const isMobile = isMobileDevice();
    let destinationParam;

    if (isMobile) {
      destinationParam = destination;
    } else {
      destinationParam = formatLocationParam(destination, 'destination');
    }

    const originParam = origin ? formatLocationParam(origin, 'origin') : '';
    const mapsUrl = createGoogleMapsUrl(
      destinationParam,
      isMobile,
      originParam
    );

    handleClose();
    window.open(mapsUrl, '_blank');
  };

  return (
    <Modal
      open={open}
      title={t('modal.modalTitle')}
      description={
        <>
          <Typography>{t('modal.modalConfirmation')}</Typography>
          <Typography>{t('modal.modalAttention')}</Typography>
        </>
      }
      actions={
        <>
          <Button fullWidth onClick={handleClose} variant='text'>
            {t('modal.cancel')}
          </Button>
          <Button
            fullWidth
            variant='contained'
            sx={googleMapsButtonStyles}
            onClick={handleNavigation}
          >
            {t('modal.modalGoogleMaps')}
          </Button>
        </>
      }
      onClose={handleClose}
    />
  );
};

export default NavigateButtonModal;
