import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment } from '@/redux/slices/exampleSlice';

const useExamplePage = (): { clicked: number; handleClick: () => void } => {
  const clicked = useAppSelector((state) => state.example.value);
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(increment());
  };

  return { clicked, handleClick };
};

export default useExamplePage;
