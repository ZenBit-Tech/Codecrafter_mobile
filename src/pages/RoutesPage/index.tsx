import { FC, useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import { t } from 'i18next';

import RouteItem from './components/RouteItem';
import { OrdersContainer } from './styles';
import { useFetchRoutes } from './useFetchRoutes';

import CustomCalendar from '@/components/CustomCalendar';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { useAppSelector } from '@/redux/hooks';

const RoutesPage: FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(() => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return today;
  });
  const driverName = useAppSelector((state) => state.auth.user?.full_name);
  const routes = useAppSelector((state) => state.route.routes);

  const { fetchRoutes, isRouteLoading } = useFetchRoutes(
    currentDate,
    driverName || ''
  );

  useEffect(() => {
    fetchRoutes().catch((error) => {
      throw new Error(error);
    });
  }, [fetchRoutes]);

  if (isRouteLoading) {
    return <Loader isLoading />;
  }

  return (
    <div>
      <Header pageName={t('routes.routes')} />
      <OrdersContainer>
        <CustomCalendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />

        {(!routes || routes.length === 0) && (
          <Typography>{t('routes.noRoutesFound')}</Typography>
        )}

        {routes?.map((route) => {
          return <RouteItem key={route.route_id} {...route} />;
        })}
      </OrdersContainer>
    </div>
  );
};

export default RoutesPage;
