import { t } from 'i18next';
import { ReactNode } from 'react';

const OrderPage = (): ReactNode => {
  return (
    <div>
      <h1>{t('orders')}</h1>
      <p>{t('greeting')}</p>
    </div>
  );
};

export default OrderPage;
