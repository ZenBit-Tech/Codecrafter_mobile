import { FieldValues, UseFormReturn } from 'react-hook-form';

import { OrderStatuses } from '@/constants/status';

interface FailedReasonFormValues extends FieldValues {
  customReason: string;
}

export interface UseFailedReasonReturn {
  selectedReason: string | null;
  customReason: string;
  register: UseFormReturn<FailedReasonFormValues>['register'];
  handleSubmit: () => Promise<void>;
  errors: UseFormReturn<FailedReasonFormValues>['formState']['errors'];
  isSendDisabled: boolean;
  handleReasonClick: (reason: string) => void;
  handleCancel: () => void;
  validationRules: {
    required: string;
    minLength: { value: number; message: string };
    maxLength: { value: number; message: string };
  };
}

interface Company {
  id: number;
  name: string;
  client_name: string;
  logo: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: number;
  is_order_locked: boolean;
  lock_number: string;
  collection_date: string;
  collection_time_start: string;
  collection_time_end: string;
  collection_address: string;
  status: OrderStatuses;
  airport_name: string;
  flight_id: string;
  ticket_photo: string;
  failed_reason: string | null;
  company: Company;
  createdAt: string;
  updatedAt: string;
}
