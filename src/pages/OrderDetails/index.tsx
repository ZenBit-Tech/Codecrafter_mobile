import { FC } from 'react';

import { t } from 'i18next';
import { useParams } from 'react-router-dom';

import CollectioInformation from './components/CollectionInformation';
import CustomerInformation from './components/CustomerInformation';
import DepartureInformation from './components/DepartureInformation';
import DispatcherInformation from './components/DispatcherInformation';
import DispatcherNote from './components/DispatcherNote';
import { OrderDetailsWrapper } from './styles';

import Header from '@/components/Header';

const OrderDetails: FC = () => {
  const { id } = useParams();

  const testData = {
    dispatcherName: 'Aleksa',
    dispatcherPhone: '+49015730000',
    note: 'Red bag with the glass',
    orderDate: '07.08.2022',
    orderTimeSlot: '8:00 - 10:00',
    orderDepartureAirport: 'Düsseldorf Airport',
    bagTitle: 'Medium bag 1',
    bagSize: 'Max 70 x 50 x 30 cm',
    bagWeight: '15 kg',
    customerName: 'Semuel Garcia',
    customerPhone: '+49015730000',
    collectionDate: '06.08.2022',
    collectionTimeSlot: '14:00 - 15:00',
    collectionAddress: 'Berlin, Adlerstraße 7',
  };

  return (
    <OrderDetailsWrapper>
      <Header hasBackIcon pageName={`${t('orders.orderNo')} ${id}`} />
      <CollectioInformation
        collectionDate={testData.collectionDate}
        collectionTimeSlot={testData.collectionTimeSlot}
        collectionAddress={testData.collectionAddress}
      />
      <CustomerInformation
        bagTitle={testData.bagTitle}
        bagSize={testData.bagSize}
        bagWeight={testData.bagWeight}
        customerName={testData.customerName}
        customerPhone={testData.customerPhone}
      />
      <DepartureInformation
        orderDate={testData.orderDate}
        orderTimeSlot={testData.orderTimeSlot}
        orderDepartureAirport={testData.orderDepartureAirport}
      />
      <DispatcherInformation
        dispatcherName={testData.dispatcherName}
        dispatcherPhone={testData.dispatcherPhone}
      />
      {testData.note && <DispatcherNote note={testData.note} />}
    </OrderDetailsWrapper>
  );
};

export default OrderDetails;
