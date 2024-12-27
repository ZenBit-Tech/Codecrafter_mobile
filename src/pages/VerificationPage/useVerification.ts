import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { sendVerificationCode, verifyCode } from '@/api/userActions';
import { useAppDispatch } from '@/redux/hooks';
import { setIsLoading } from '@/redux/slices/authSlice';

interface UseVerificationReturnType {
  otp: string;
  setOtp: Dispatch<SetStateAction<string>>;
  timeLeft: number;
  focusedIndex: number | null;
  setFocusedIndex: Dispatch<SetStateAction<number | null>>;
  handleResendCode: () => Promise<void>;
  handleSubmit: () => Promise<void>;
  email: string;
  isLocked: boolean;
}

const useVerification = (
  otpExpiryTime: number,
  numInputs: number
): UseVerificationReturnType => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(otpExpiryTime);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const email: string = location.state?.email || '';

  const tick = 1000;
  const maxTries = 5;

  useEffect(() => {
    if (!email) {
      navigate('/');
    }
  }, [email, navigate]);

  useEffect((): (() => void) | void => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), tick);

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [timeLeft]);

  const handleResendCode = async (): Promise<void> => {
    if (isLocked) {
      toast.warn(t('signin.error.accountLocked'));

      return;
    }

    setAttemptCount((prev) => prev + 1);
    if (attemptCount + 1 >= maxTries) {
      setIsLocked(true);
    }

    try {
      dispatch(setIsLoading(true));
      setIsLocked(true);
      const isSent = await sendVerificationCode(email)();

      if (isSent) {
        setTimeLeft(otpExpiryTime);
      }
    } catch (error) {
      throw new Error('Error occurred while sending verification code');
    } finally {
      dispatch(setIsLoading(false));
      setIsLocked(false);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      if (otp.length === numInputs) {
        setOtp('');
        setIsLocked(true);
        dispatch(setIsLoading(true));
        await verifyCode(otp, email)(dispatch);
      } else {
        toast.error(t('verification.otpInvalid'));
      }
    } catch (error) {
      throw new Error('Error occurred while verifying OTP');
    } finally {
      dispatch(setIsLoading(false));
      setIsLocked(false);
    }
  };

  return {
    otp,
    setOtp,
    timeLeft,
    focusedIndex,
    setFocusedIndex,
    handleResendCode,
    handleSubmit,
    email,
    isLocked,
  };
};

export default useVerification;
