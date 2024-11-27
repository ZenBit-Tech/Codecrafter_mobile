import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Backdrop,
  ButtonGroup,
  CancelButton,
  ConfirmButton,
  Description,
  Info,
  InfoContainer,
  ModalContent,
  ModalWrapper,
  Title,
} from './styles';

import { formatDate } from '@/utils/formatDate.ts';

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

  const formattedDate = formatDate(routeDetails.submissionDate);

  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <Title>{t('route.startRouteTitle')}</Title>
          <Description>{t('route.startRouteDescription')}</Description>{' '}
          <InfoContainer>
            <Info>
              <strong>{t('route.route')}:</strong> #{routeDetails.id}
            </Info>
            <Info>
              <strong>{t('route.routeDistance')}:</strong>{' '}
              {routeDetails.distance} {t('distance.km')}
            </Info>
            <Info>
              <strong>{t('route.collectionDate')}:</strong> {formattedDate}
            </Info>
            <Info>
              <strong>{t('route.routeTime')}:</strong> {routeDetails.routeTime}
            </Info>
          </InfoContainer>
          <ButtonGroup>
            <ConfirmButton onClick={onConfirm}>
              {t('route.startButton')}
            </ConfirmButton>{' '}
            <CancelButton onClick={onClose}>
              {t('route.cancelButton')}
            </CancelButton>{' '}
          </ButtonGroup>
        </ModalContent>
      </ModalWrapper>
      <Backdrop onClick={onClose} />
    </>
  );
};
