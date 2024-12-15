import { PayloadAction } from '@reduxjs/toolkit';
import { Dispatch, useMemo, useReducer } from 'react';

interface BoardingPassState {
  isVerified: boolean;
  isOngoing: boolean;
  isVerifiedSuccessfully: boolean;
}

interface UseVerifyBoardingPassInterface {
  verifyPassStore: BoardingPassState;
  verifyPassDispatch: Dispatch<{ payload: boolean; type: string }>;
}

export const useVerifyBoardingPass = (): UseVerifyBoardingPassInterface => {
  const store: BoardingPassState = useMemo(() => {
    return {
      isVerified: false,
      isOngoing: false,
      isVerifiedSuccessfully: false,
    };
  }, []);

  const reducer = (
    state: BoardingPassState,
    action: PayloadAction<boolean>
  ): BoardingPassState => {
    switch (action.type) {
      case 'SET_VERIFIED':
        return { ...state, isVerified: action.payload };

      case 'SET_ACTIVE':
        return { ...state, isVerifiedSuccessfully: action.payload };

      case 'SET_LOADING':
        return { ...state, isOngoing: action.payload };

      case 'RESET':
        return store;

      default:
        return state;
    }
  };

  const [verifyPassStore, verifyPassDispatch] = useReducer(reducer, store);

  return { verifyPassStore, verifyPassDispatch };
};
