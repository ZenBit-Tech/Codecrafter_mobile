import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { RouteResponse } from '@/interfaces/RouteResponse';
import { useGetRoutesQuery } from '@/redux/slices/route/routeSlice';

export const RoutesList: React.FC = () => {
  const { data: routes, isLoading, error } = useGetRoutesQuery();
  const navigate = useNavigate();
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

  if (!routes || routes.length === 0) {
    return <p>{t('route.routeNotFound')}</p>;
  }

  return (
    <ul>
      {routes.map((route: RouteResponse) => (
        <li key={route.id}>
          <button type='button' onClick={() => navigate(`/routes/${route.id}`)}>
            <h3>
              {t('route.routeId')}: {route.id}
            </h3>
            <p>
              {t('route.status')}: {route.status}
            </p>
            <p>
              {t('route.distance')}: {route.distance} {t('distance.km')}
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
};
