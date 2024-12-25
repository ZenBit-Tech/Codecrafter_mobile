import { FieldValues, UseFormReturn } from 'react-hook-form';

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
