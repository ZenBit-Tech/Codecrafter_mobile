import { useNavigate } from 'react-router-dom';

interface UseBaggageRecordReturn {
  handleNextPage: () => void;
}

const useBaggageCover = (): UseBaggageRecordReturn => {
  const navigate = useNavigate();

  const handleNextPage = (): void => {
    navigate('/app/map/loading');
  };

  return {
    handleNextPage,
  };
};

export default useBaggageCover;
