import { useEffect, useState } from 'react';

import axios from 'axios';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { ICustomer } from '@/interfaces/Customer';
import { useAppSelector } from '@/redux/hooks';

interface UseGetCustomerInformation {
  customer: null | ICustomer;
}

export const useGetCustomerInform = (): UseGetCustomerInformation => {
  const [customer, setCustomer] = useState<null | ICustomer>(null);
  const { value: orderId } = useAppSelector((store) => store.choseOrder);

  const getCustomerInformRequest = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/customers?orderId=${orderId}`
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
