import { FC, useState } from 'react';

import dayjs from 'dayjs';
import { t } from 'i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import BottomNavigationBar from './components/BottomNavigationBar';
import CollectioInformation from './components/CollectionInformation';
import CustomerInformation from './components/CustomerInformation';
import DepartureInformation from './components/DepartureInformation';
import DispatcherInformation from './components/DispatcherInformation';
import InformCustomer from './components/InformCustomer';
import InformModal from './components/InformModal';
import {
  ButtonsWrapper,
  customerInformedStyles,
  failedButtonStyles,
  OrderDetailsWrapper,
} from './styles';
import { useGetOrderDetails } from './useGetOrderDetails';

import Button from '@/components/Button';
import Header from '@/components/Header';
import NavigateButtonModal from '@/components/NavigateButtonModal';
import { driverLocation } from '@/constants/constants';
import { DATE_FORMAT } from '@/constants/dateFormats';
import { OrderStatuses } from '@/constants/status';
import { useChangeOrderStatus } from '@/hooks/useChangeOrderStatus';
import { useGeocodeAddress } from '@/hooks/useGeocodeAddress';
import { setChoseOrder } from '@/redux/slices/choseOrderSlice';
import { store } from '@/redux/store';
import { createTimeRange } from '@/utils/createTimeRange';

const OrderDetails: FC = () => {
  const { orderDetails } = useGetOrderDetails();
  const [isCustomerInformed, setIsCustomerInformed] = useState<boolean>(false);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [isNavigateModalOpened, setIsNavigateModalOpened] =
    useState<boolean>(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const { geolocation } = useGeocodeAddress(orderDetails?.collectionAddress);

  const { changeOrderStatus } = useChangeOrderStatus();

  const handleInformCustomer = (): void => {
    setIsModalOpened(false);
    setIsCustomerInformed(true);
    changeOrderStatus(id ? +id : 0, OrderStatuses.CUSTOMER_INFORMED);
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
        destination={
          geolocation
            ? { lat: geolocation.lat, lng: geolocation.lng }
            : orderDetails?.collectionAddress
        }
        origin={driverLocation}
      />
      <Header hasBackIcon pageName={`${t('orders.orderNo')} ${id}`} />
      <ButtonsWrapper>
        <Button
          variant='outlined'
          label='orderDetails.failed'
          sx={failedButtonStyles}
          onClick={() => navigate(`/app/map/failed/${id}`)}
        />

        {!isCustomerInformed &&
        orderDetails?.status !== OrderStatuses.CUSTOMER_INFORMED ? (
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
      {orderDetails !== null && (
        <>
          <CollectioInformation
            collectionDate={dayjs(orderDetails?.collectionDate).format(
              DATE_FORMAT
            )}
            collectionTimeSlot={createTimeRange(
              orderDetails?.collectionTimeStart,
              orderDetails?.collectionTimeEnd
            )}
            collectionAddress={orderDetails.collectionAddress}
          />
          <CustomerInformation
            bagSize={orderDetails?.luggages.reduce((accumulator, luggage) => {
              return `${accumulator}${luggage.luggageType}, `;
            }, '')}
            bagWeight={orderDetails?.luggages
              .reduce((amount, luggage) => {
                return amount + luggage.luggageWeight;
              }, 0)
              .toString()}
            customerName={orderDetails.customerFullName}
            customerPhone={orderDetails.customerPhoneNumber}
          />
          <DepartureInformation
            orderDate={dayjs(orderDetails?.collectionDate).format(DATE_FORMAT)}
            orderTimeSlot={createTimeRange(
              orderDetails?.collectionTimeStart,
              orderDetails?.collectionTimeEnd
            )}
            orderDepartureAirport={orderDetails?.airportName}
          />
          <DispatcherInformation
            dispatcherName={orderDetails?.dispatcherFullName}
            dispatcherPhone={orderDetails?.dispatcherPhoneNumber}
          />
        </>
      )}
      <BottomNavigationBar
        openNavigateModal={() => setIsNavigateModalOpened(true)}
      />
    </OrderDetailsWrapper>
  );
};

export default OrderDetails;
