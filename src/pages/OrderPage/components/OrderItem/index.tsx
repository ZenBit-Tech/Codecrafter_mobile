import { t } from 'i18next';
import { FC } from 'react';

import { IconWrapper, OrderDetails, OrderItemWrapper } from './styles';

import Call from '@/assets/icons/call.svg';
import { Order } from '@/interfaces/Orders';
import OrderInfo from '@/pages/OrderPage/components/OrderInfo';

const OrderItem: FC<Order> = ({
  orderId,
  routeId,
  customerName,
  collectionTime,
  phoneNumber,
}) => {
  return (
    <OrderItemWrapper>
      <OrderDetails>
        <OrderInfo
          itemTitle={`${t('orders.orderNo')} ${orderId}`}
          itemContent={`${t('orders.route')} ${routeId}`}
        />
        <OrderInfo
          itemTitle={t('orders.customerName')}
          itemContent={customerName}
        />
        <OrderInfo
          itemTitle={t('orders.collectionTime')}
          itemContent={collectionTime}
        />
        <OrderInfo
          itemTitle={t('orders.phoneNumber')}
          itemContent={phoneNumber}
        />
      </OrderDetails>
      <IconWrapper>
        <a href='tel:555-555-5555'>
          <img src={Call} alt={t('call')} />
        </a>
      </IconWrapper>
    </OrderItemWrapper>
  );
};

export default OrderItem;
