import { FieldValues, UseFormReturn } from 'react-hook-form';

interface FailedReasonFormValues extends FieldValues {
  customReason: string;
}

export interface UseFailedReasonReturn {
  tBase: string;
  reasonNotAvailable: string;
  reasonBagsNotReady: string;
  reasonOther: string;
  selectedReason: string | null;
  customReason: string;
  register: UseFormReturn<FailedReasonFormValues>['register'];
  handleSubmit: UseFormReturn<FailedReasonFormValues>['handleSubmit'];
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
