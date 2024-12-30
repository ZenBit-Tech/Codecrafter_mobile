import { useNavigate } from 'react-router-dom';

import { OrderStatuses } from '@/constants/status';
import { useChangeOrderStatus } from '@/hooks/useChangeOrderStatus';
import { useAppSelector } from '@/redux/hooks';

interface UseBaggageCoverReturn {
  handleNextPage: () => void;
}

const useBaggageCover = (): UseBaggageCoverReturn => {
  const navigate = useNavigate();
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const { changeOrderStatus } = useChangeOrderStatus();

  const handleNextPage = (): void => {
    changeOrderStatus(orderId ? +orderId : 0, OrderStatuses.BAGGAGE_COVERED);
    navigate('/app/map/scan');
  };

  return {
    handleNextPage,
  };
};

export default useBaggageCover;
