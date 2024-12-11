import { t } from 'i18next';
import { FC, useState } from 'react';

import RouteItem from './components/RouteItem';
import { OrdersContainer } from './styles';

import CustomCalendar from '@/components/CustomCalendar';
import Header from '@/components/Header';
import { StatusEnum } from '@/constants/status';

const RoutesPage: FC = () => {
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return today;
  });

  const routesData = [
    {
      routeId: 1,
      routeDate: new Date(),
      distance: 900,
      routeTime: {
        submissionDate: new Date(),
        arrivalDate: new Date(),
      },
      status: StatusEnum.COMPLETED,
    },
    {
      routeId: 2,
      routeDate: new Date(),
      distance: 900,
      routeTime: {
        submissionDate: new Date(),
        arrivalDate: new Date(),
      },
      status: StatusEnum.FAILED,
    },
    {
      routeId: 3,
      routeDate: new Date(),
      distance: 900,
      routeTime: {
        submissionDate: new Date(),
        arrivalDate: new Date(),
      },
      status: StatusEnum.AT_RISK,
    },
    {
      routeId: 4,
      routeDate: new Date(),
      distance: 900,
      routeTime: {
        submissionDate: new Date(),
        arrivalDate: new Date(),
      },
      status: StatusEnum.UPCOMING,
    },
  ];

  return (
    <div>
      <Header pageName={t('routes.routes')} username={t('profilePicture')} />
      <OrdersContainer>
        <CustomCalendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />

        {routesData?.map((route) => {
          return <RouteItem key={route.routeId} {...route} />;
        })}
      </OrdersContainer>
    </div>
  );
};

export default RoutesPage;
