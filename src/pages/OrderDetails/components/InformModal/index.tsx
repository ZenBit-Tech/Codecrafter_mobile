import { FC } from 'react';

import { t } from 'i18next';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

interface ModalProps {
  open: boolean;
  handleInformCustomer: () => void;
  handleCloseModal: () => void;
}

const InformModal: FC<ModalProps> = ({
  open,
  handleInformCustomer,
  handleCloseModal,
}) => {
  return (
    <Modal
      open={open}
      title={t('orderDetails.modal.title')}
      description={t('orderDetails.modal.description')}
      onClose={handleCloseModal}
      actions={
        <>
          <Button
            fullWidth
            onClick={handleCloseModal}
            variant='text'
            label={t('orderDetails.modal.cancel')}
          />
          <Button
            fullWidth
            onClick={handleInformCustomer}
            variant='contained'
            label={t('orderDetails.modal.okay')}
          />
        </>
      }
    />
  );
};

export default InformModal;
