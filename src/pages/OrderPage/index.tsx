import { t } from 'i18next';
import { ReactNode } from 'react';

import { OrderPageWrapper } from './styles';

import Header from '@/components/Header';

const OrderPage = (): ReactNode => {
  return (
    <>
      <Header
        pageName={t('navigation.orders')}
        username={t('profilePicture')}
      />
      <OrderPageWrapper>
        <h1>{t('navigation.orders')}</h1>
        <p>{t('greeting')}</p>
      </OrderPageWrapper>
    </>
  );
};

export default OrderPage;
