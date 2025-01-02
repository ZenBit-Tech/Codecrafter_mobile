import { useEffect, useState } from 'react';

import { t } from 'i18next';
import { toast } from 'react-toastify';

import { geocodeAddress } from '@/api/routeActions';

interface Geolocation {
  lat: number;
  lng: number;
}

export const useGeocodeAddress = (
  address?: string
): {
  geolocation: Geolocation | null;
} => {
  const [geolocation, setGeolocation] = useState<Geolocation | null>(null);

  useEffect(() => {
    const fetchGeolocation = async (): Promise<void> => {
      if (!address) {
        setGeolocation(null);
        toast.warn(t('An error occurred while fetching geolocation.'));

        return;
      }

      try {
        const result = await geocodeAddress(address);

        if (result) {
          setGeolocation(result);
        } else {
          toast.error(t('Failed to fetch geolocation for the address.'));
          setGeolocation(null);
        }
      } catch (error) {
        toast.error(t('An error occurred while fetching geolocation.'));
        setGeolocation(null);
      }
    };

    fetchGeolocation().catch();
  }, [address]);

  return { geolocation };
};
