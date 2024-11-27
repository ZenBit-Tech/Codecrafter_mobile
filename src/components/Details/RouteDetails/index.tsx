import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { RouteStartModal } from '@/components/Modals/RouteStartModal';
import { ConfirmButton } from '@/components/Modals/RouteStartModal/styles.ts';
import { useGetRoutesQuery } from '@/redux/slices/route/routeSlice';
import { calculateRouteTime } from '@/utils/calculateRouteTime.ts';

export const RouteDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: routes, isLoading, error } = useGetRoutesQuery();
  const [isModalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  if (isLoading) {
    return <p>{t('route.loading')}</p>;
  }

  if (error) {
    return (
      <p>
        {t('route.errorFetchingRouteDetails')}: {JSON.stringify(error, null)}
      </p>
    );
  }

  const selectedRoute = routes?.find((r) => r.id.toString() === id);

  if (!selectedRoute) {
    return <p>{t('route.routeNotFound')}</p>;
  }

  const routeTime = calculateRouteTime(
    selectedRoute.submission_date,
    selectedRoute.arrival_date
  );

  const handleStart = (): void => {
    setModalOpen(false);
  };

  return (
    <div>
      <h3>
        {t('route.routeId')}: {selectedRoute.id}
      </h3>
      <p>
        {t('route.status')}: {selectedRoute.status}
      </p>
      <p>
        {t('route.distance')}: {selectedRoute.distance} {t('distance.km')}
      </p>
      <ConfirmButton type='button' onClick={() => setModalOpen(true)}>
        {t('route.startRouteButton')}
      </ConfirmButton>

      <RouteStartModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleStart}
        routeDetails={{
          id: selectedRoute.id.toString(),
          distance: selectedRoute.distance,
          submissionDate: new Date(
            selectedRoute.submission_date
          ).toLocaleDateString(),
          routeTime,
        }}
      />
    </div>
  );
};
