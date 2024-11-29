import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useRoutes } from '@/components/Lists/RoutLists/useRoutes.ts';
import { RouteStartModal } from '@/components/Modals/RouteStartModal';
import { COLORS } from '@/constants/colors.ts';
import { FONT } from '@/constants/font.ts';
import { calculateRouteTime } from '@/utils/calculateRouteTime';

export const RouteDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const { routes, loading, error } = useRoutes();

  if (loading) {
    return <p>{t('route.loading')}</p>;
  }

  if (error) {
    return (
      <p>
        {t('route.errorFetchingRouteDetails')}: {error}
      </p>
    );
  }

  const selectedRoute = routes?.find((route) => route.id.toString() === id);

  if (!selectedRoute) {
    return <p>{t('route.routeNotFound')}</p>;
  }

  const routeTime = calculateRouteTime(
    selectedRoute.submission_date,
    selectedRoute.arrival_date
  );

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

      <Box display='flex' flexDirection='column' gap={2} alignItems='center'>
        <Button
          variant='contained'
          onClick={() => setModalOpen(true)}
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
          {t('route.startRouteButton')}
        </Button>
      </Box>

      <RouteStartModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => setModalOpen(false)}
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
