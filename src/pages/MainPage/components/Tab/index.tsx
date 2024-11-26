import { Link } from 'react-router-dom';

import { TabIcon } from './styles';

import { useAppDispatch } from '@/redux/hooks';
import { changePage } from '@/redux/slices/pagesSlice';

interface TabProps {
  title: string;
  index: number;
  iconSrc: string;
  active: boolean;
}

const Tab = ({ title, index, iconSrc, active }: TabProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <TabIcon
      data-index={index}
      className={`icon ${active ? 'active' : ''}`}
      onClick={() => dispatch(changePage(index))}
    >
      <Link to={title}>
        <img src={iconSrc} alt={title} />
      </Link>
    </TabIcon>
  );
};

export default Tab;
