import { FC } from 'react';

import { format } from 'date-fns';
import { t } from 'i18next';

import { IconWrapper, OrderDetails, OrderItemWrapper } from './styles';

import Call from '@/assets/icons/call.svg';
import { HOURS_MINUTES_RANGE } from '@/constants/dateFormats';
import { Order } from '@/interfaces/Orders';
import OrderInfo from '@/pages/OrderPage/components/OrderInfo';
import { addPadding } from '@/utils/stringUtils';

const OrderItem: FC<Order> = ({
  orderId,
  routeId,
  collectionTimeStart,
  collectionTimeEnd,
  customerName,
  customerPhone,
}) => {
  const routePadding = 6;

  return (
    <OrderItemWrapper>
      <OrderDetails>
        <OrderInfo
          itemTitle={`${t('orders.orderNo')} ${orderId}`}
          itemContent={`${t('orders.route')} #${addPadding(routeId, routePadding)}`}
        />
        <OrderInfo
          itemTitle={t('orders.customerName')}
          itemContent={customerName}
        />
        <OrderInfo
          itemTitle={t('orders.collectionTime')}
          itemContent={`${format(new Date(collectionTimeStart), HOURS_MINUTES_RANGE)} - ${format(new Date(collectionTimeEnd), HOURS_MINUTES_RANGE)}`}
        />
        <OrderInfo
          itemTitle={t('orders.phoneNumber')}
          itemContent={customerPhone}
        />
      </OrderDetails>
      <IconWrapper>
        <a href={`tel:${customerPhone}`}>
          <img src={Call} alt={t('orders.call')} />
        </a>
      </IconWrapper>
    </OrderItemWrapper>
  );
};

export default OrderItem;
