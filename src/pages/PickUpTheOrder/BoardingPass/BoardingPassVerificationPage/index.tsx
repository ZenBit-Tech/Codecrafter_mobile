import { t } from 'i18next';
import {
  createContext,
  Dispatch,
  FC,
  useContext,
  useMemo,
  useState,
} from 'react';

import { ActionBtns } from './components/ActionBtns';
import { BoardingPassInformBlock } from './components/BoardingPassInformBlock';
import { useVerifyBoardingPass } from './useVerifyBoardingPass';

import Header from '@/components/Header';
import { useAppSelector } from '@/redux/hooks';

interface BoardingPassVerificationContextInterface {
  isVerified: boolean;
  isOngoing: boolean;
  isVerifiedSuccessfully: boolean;
  verifyPassDispatch: Dispatch<{ payload: boolean; type: string }>;
}

const BoardingPassVerificationContext = createContext<
  BoardingPassVerificationContextInterface | undefined
>(undefined);

export const usePassVerificationData =
  (): BoardingPassVerificationContextInterface => {
    const context = useContext(BoardingPassVerificationContext);

    if (!context) {
      throw new Error(t('routeDetails.contextIsUndefined'));
    }

    return context;
  };

export const BoardingPassVerificationPage: FC = () => {
  const [disabled, setIsDisabled] = useState<boolean>(false);
  const { user } = useAppSelector((store) => store.auth);
  const { verifyPassStore, verifyPassDispatch } = useVerifyBoardingPass();

  const memoizedValue = useMemo(
    () => ({ ...verifyPassStore, verifyPassDispatch }),
    [verifyPassStore, verifyPassDispatch]
  );

  return (
    <BoardingPassVerificationContext.Provider value={memoizedValue}>
      {' '}
      <Header
        hasBackIcon
        pageName='Boarding pass Verification '
        username={user?.full_name || ''}
      />
      <BoardingPassInformBlock handleChoose={setIsDisabled} />
      <ActionBtns isNextBtnDisabled={disabled} />
    </BoardingPassVerificationContext.Provider>
  );
};
