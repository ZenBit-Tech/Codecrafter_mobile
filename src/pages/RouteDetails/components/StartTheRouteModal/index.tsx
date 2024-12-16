import { Button, Typography } from '@mui/material';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import Modal from '@/components/Modal';

interface StartTheRouteModalProps {
  open: boolean;
  handleClose: () => void;
}

const StartTheRouteModal: React.FC<StartTheRouteModalProps> = ({
  open,
  handleClose,
}: StartTheRouteModalProps) => {
  return (
    <Modal
      open={open}
      title={t('routes.startConfirmation')}
      description={
        <div>
          <Typography>{t('routes.route')}: #000125</Typography>
          <Typography>{t('routes.distance')}: 900 km</Typography>
          <Typography>{t('routes.collectionDate')}: 6 Aug 2024</Typography>
          <Typography>{t('routes.time')}: 12:00-22:00</Typography>
        </div>
      }
      actions={
        <>
          <Button fullWidth onClick={handleClose} variant='text'>
            {t('modal.cancel')}
          </Button>
          <Button
            fullWidth
            onClick={() => toast.success('Route started!')}
            variant='contained'
          >
            {t('modal.start')}
          </Button>
        </>
      }
      onClose={handleClose}
    />
  );
};

export default StartTheRouteModal;
