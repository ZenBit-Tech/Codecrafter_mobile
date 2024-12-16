import { useEffect, useState } from 'react';

import axios from 'axios';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { ICustomer } from '@/interfaces/Customer';

interface UseGetCustomerInformation {
  customer: null | ICustomer;
}

export const useGetCustomerInform = (): UseGetCustomerInformation => {
  const [customer, setCustomer] = useState<null | ICustomer>(null);

  const getCustomerInformRequest = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/customers/1`
      );

      setCustomer(response.data);
    } catch (error) {
      toast.error(t('boardingPass.errors.cantFindUser'));
    }
  };

  useEffect(() => {
    getCustomerInformRequest().catch();
  }, []);

  return { customer };
};
