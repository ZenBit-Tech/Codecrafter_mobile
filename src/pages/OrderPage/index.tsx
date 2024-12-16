import { ReactNode, useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import { t } from 'i18next';

import OrderItem from './components/OrderItem';
import { OrderPageWrapper } from './styles';
import { useFetchOrders } from './useFetchOrders';

import CustomCalendar from '@/components/CustomCalendar';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { Order } from '@/interfaces/Orders';
import { useAppSelector } from '@/redux/hooks';

const OrderPage = (): ReactNode => {
  const [currentDate, setCurrentDate] = useState<Date>(() => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return today;
  });
  const driverId = useAppSelector((state) => state.auth.user?.id);
  const orders = useAppSelector((state) => state.orders.orders);
  const { fetchOrders, isOrderLoading } = useFetchOrders(currentDate, driverId);

  useEffect(() => {
    fetchOrders().catch((error) => {
      throw new Error(error);
    });
  }, [fetchOrders]);

  if (isOrderLoading) {
    return <Loader isLoading />;
  }

  return (
    <>
      <Header pageName={t('navigation.orders')} />
      <OrderPageWrapper>
        <CustomCalendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        {(!orders || orders.length === 0) && (
          <Typography>{t('orders.noOrders')}</Typography>
        )}
        {orders?.map((order: Order) => {
          return <OrderItem key={order.orderId} {...order} />;
        })}
      </OrderPageWrapper>
    </>
  );
};

export default OrderPage;
