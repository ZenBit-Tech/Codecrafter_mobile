import { Typography } from '@mui/material';
import { t } from 'i18next';
import { ReactNode } from 'react';

import OrderItem from './components/OrderItem';
import { OrderPageWrapper } from './styles';

import CustomCalendar from '@/components/CustomCalendar';
import Header from '@/components/Header';
import { Order } from '@/interfaces/Orders';

const orderData = [
  {
    orderId: 1,
    routeId: 125,
    customerName: 'Semuel Garcia',
    collectionTime: '8:00 - 10:00',
    phoneNumber: '+49015730000',
  },
  {
    orderId: 2,
    routeId: 125,
    customerName: 'Semuel Garcia',
    collectionTime: '8:00 - 10:00',
    phoneNumber: '+49015730000',
  },
  {
    orderId: 3,
    routeId: 125,
    customerName: 'Semuel Garcia',
    collectionTime: '8:00 - 10:00',
    phoneNumber: '+49015730000',
  },
];

const OrderPage = (): ReactNode => {
  return (
    <>
      <Header
        pageName={t('navigation.orders')}
        username={t('profilePicture')}
      />
      <OrderPageWrapper>
        <CustomCalendar />
        {(!orderData || orderData.length === 0) && (
          <Typography>{t('orders.noOrders')}</Typography>
        )}
        {orderData?.map((order: Order) => {
          return <OrderItem key={order.orderId} {...order} />;
        })}
      </OrderPageWrapper>
    </>
  );
};

export default OrderPage;
