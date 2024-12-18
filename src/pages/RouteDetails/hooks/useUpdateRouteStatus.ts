import { useCallback } from 'react';

import { t } from 'i18next';
import { toast } from 'react-toastify';

import { updateRouteStatus } from '@/api/routeActions';
import { RouteStatuses } from '@/constants/status';
import { useAppDispatch } from '@/redux/hooks';
import { setRouteLoading } from '@/redux/slices/routeSlice';

interface UseFetchRouteReturnType {
  fetchUpdatedRoute: () => Promise<void>;
}

export const useUpdateRouteStatus = (
  routeId: number | undefined,
  userId: number | undefined,
  status: RouteStatuses
): UseFetchRouteReturnType => {
  const dispatch = useAppDispatch();

  const fetchUpdatedRoute = useCallback(async () => {
    if (!userId || !routeId) return;

    dispatch(setRouteLoading(true));
    try {
      await updateRouteStatus(routeId, userId, status)(dispatch);
    } catch (error) {
      toast.error(t('routes.errorUpdateStatusRoute'));
    } finally {
      dispatch(setRouteLoading(false));
    }
  }, [dispatch, routeId, status, userId]);

  return { fetchUpdatedRoute };
};
