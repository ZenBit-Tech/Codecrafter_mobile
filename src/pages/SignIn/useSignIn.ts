import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { sendVerificationCode } from '@/api/userActions';
import { SignInFormData, UseSignInReturnType } from '@/interfaces/SignIn';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const useSignIn = (): UseSignInReturnType => {
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors, isValid },
    watch,
  } = useForm<SignInFormData>({
    mode: 'onBlur',
    defaultValues: { email: '' },
  });

  const emailValue = watch('email');

  useEffect(() => {
    clearErrors('email');
  }, [emailValue, clearErrors]);

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    if (isLocked) return;

    const maxAttempts = 5;

    const { email } = data;

    try {
      const isSent = await sendVerificationCode(email)();

      if (!isSent) {
        setAttemptCount((prev) => prev + 1);
      }

      if (attemptCount + 1 >= maxAttempts) {
        setIsLocked(true);
      }
    } catch (error) {
      throw new Error('Error occurred while sending verification code');
    }
  };

  const getHelperText = (): string | undefined => {
    if (isLocked) {
      return '';
    }
    if (errors.email) {
      return errors.email.message;
    }
    return '';
  };

  const clearErrorOnChange = (): void => clearErrors('email');

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    isLocked,
    onSubmit,
    getHelperText,
    emailRegex,
    clearErrorOnChange,
  };
};

export default useSignIn;
