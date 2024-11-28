import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useRoutes } from '@/components/Lists/RoutLists/useRoutes.ts';

interface Route {
  id: number;
  status: string;
  distance: number;
  submission_date: string;
  arrival_date: string;
}

export const RoutesList: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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

  if (!routes || routes.length === 0) {
    return <p>{t('route.routeNotFound')}</p>;
  }

  return (
    <ul>
      {routes.map((route: Route) => (
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
