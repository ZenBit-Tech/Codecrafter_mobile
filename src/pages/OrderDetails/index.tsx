import { FC, useState } from 'react';

import { t } from 'i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import BottomNavigationBar from './components/BottomNavigationBar';
import CollectioInformation from './components/CollectionInformation';
import CustomerInformation from './components/CustomerInformation';
import DepartureInformation from './components/DepartureInformation';
import DispatcherInformation from './components/DispatcherInformation';
import DispatcherNote from './components/DispatcherNote';
import InformCustomer from './components/InformCustomer';
import InformModal from './components/InformModal';
import {
  ButtonsWrapper,
  customerInformedStyles,
  failedButtonStyles,
  OrderDetailsWrapper,
} from './styles';

import Button from '@/components/Button';
import Header from '@/components/Header';
import NavigateButtonModal from '@/components/NavigateButtonModal';
import { setChoseOrder } from '@/redux/slices/choseOrderSlice';
import { store } from '@/redux/store';

const OrderDetails: FC = () => {
  const [isCustomerInformed, setIsCustomerInformed] = useState<boolean>(false);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [isNavigateModalOpened, setIsNavigateModalOpened] =
    useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const testData = {
    dispatcherName: 'Aleksa',
    dispatcherPhone: '+49015730000',
    note: 'Red bag with the glass',
    orderDate: '07.08.2022',
    orderTimeSlot: '8:00 - 10:00',
    orderDepartureAirport: 'Düsseldorf Airport',
    bagSize: 'Max 70 x 50 x 30 cm',
    bagWeight: '15 kg',
    customerName: 'Semuel Garcia',
    customerPhone: '+49015730000',
    collectionDate: '06.08.2022',
    collectionTimeSlot: '14:00 - 15:00',
    collectionAddress: 'Berlin, Adlerstraße 7',
  };

  const handleInformCustomer = (): void => {
    setIsModalOpened(false);
    setIsCustomerInformed(true);
    toast.success(t('orderDetails.informed'));
  };

  return (
    <OrderDetailsWrapper>
      <InformModal
        open={isModalOpened}
        handleInformCustomer={handleInformCustomer}
        handleCloseModal={() => setIsModalOpened(false)}
      />
      <NavigateButtonModal
        open={isNavigateModalOpened}
        handleClose={() => setIsNavigateModalOpened(false)}
      />
      <Header hasBackIcon pageName={`${t('orders.orderNo')} ${id}`} />
      <ButtonsWrapper>
        <Button
          variant='outlined'
          label='orderDetails.failed'
          sx={failedButtonStyles}
          onClick={() => navigate(`/app/map/failed/${id}`)}
        />
        {!isCustomerInformed ? (
          <Button
            variant='contained'
            label='orderDetails.customerInformed'
            sx={customerInformedStyles}
            onClick={() => setIsModalOpened(true)}
          />
        ) : (
          <Button
            variant='contained'
            label='orderDetails.pickup'
            sx={customerInformedStyles}
            onClick={() => {
              store.dispatch(setChoseOrder(id ? +id : null));
              navigate('/app/pre-arrival');
            }}
          />
        )}
      </ButtonsWrapper>
      <InformCustomer />
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
      <BottomNavigationBar
        openNavigateModal={() => setIsNavigateModalOpened(true)}
      />
    </OrderDetailsWrapper>
  );
};

export default OrderDetails;
