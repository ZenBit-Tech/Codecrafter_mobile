import { useNavigate } from 'react-router-dom';

const useBaggageCover = (): {
  handleNextPage: () => void;
} => {
  const navigate = useNavigate();

  const handleNextPage = (): void => {
    navigate('/app/map/locking');
  };

  return {
    handleNextPage,
  };
};

export default useBaggageCover;
