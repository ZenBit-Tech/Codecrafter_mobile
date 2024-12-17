import { useNavigate } from 'react-router-dom';

const backNumber = -1;

const useBaggageRecord = (): {
  handleNextPage: () => void;
  handleBack: () => void;
} => {
  const navigate = useNavigate();

  const handleNextPage = (): void => {
    navigate('/app/map/covering');
  };

  const handleBack = (): void => {
    navigate(backNumber);
  };

  return {
    handleNextPage,
    handleBack,
  };
};

export default useBaggageRecord;
