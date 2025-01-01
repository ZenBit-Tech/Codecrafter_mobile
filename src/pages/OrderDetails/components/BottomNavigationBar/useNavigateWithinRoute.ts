import { useNavigate, useParams } from 'react-router-dom';

import { ROUTE_PAGE_ID } from '@/constants/numbers';
import { useAppSelector } from '@/redux/hooks';

interface UseNavigateWithinRouteHook {
  isNavBtnsVisible: boolean;
  handleNavigateToNextOrder: () => void;
  handleNavigateToPreviousOrder: () => void;
}

export const useNavigateWithinRoute = (): UseNavigateWithinRouteHook => {
  const { pageSelected: pageId } = useAppSelector((store) => store.pages);
  const { validAddresses } = useAppSelector((store) => store.route);
  const { id } = useParams();
  const navigate = useNavigate();

  const orderIds = validAddresses.map((address) => address.id);

  const handleNavigateToNextOrder = (): void => {
    const index = orderIds.findIndex((orderId) => orderId === (id ? +id : 0));

    if (index === orderIds.length - 1) {
      navigate(`/app/orders/${orderIds[0]}`);
    } else {
      navigate(`/app/orders/${orderIds[index + 1]}`);
    }
  };

  const handleNavigateToPreviousOrder = (): void => {
    const index = orderIds.findIndex((orderId) => orderId === (id ? +id : 0));

    if (index === 0) {
      navigate(`/app/orders/${orderIds[orderIds.length - 1]}`);
    } else {
      navigate(`/app/orders/${orderIds[index - 1]}`);
    }
  };

  return {
    isNavBtnsVisible: pageId === ROUTE_PAGE_ID,
    handleNavigateToNextOrder,
    handleNavigateToPreviousOrder,
  };
};
