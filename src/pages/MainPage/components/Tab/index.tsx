import { Link } from 'react-router-dom';

import { Badge, TabIcon } from './styles';

import { useAppDispatch } from '@/redux/hooks';
import { changePage } from '@/redux/slices/pagesSlice';

interface TabProps {
  title: string;
  index: number;
  iconSrc: string;
  active: boolean;
  badgeContent?: number | null;
}

const Tab = ({
  title,
  index,
  iconSrc,
  active,
  badgeContent,
}: TabProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(changePage(index));
  };

  return (
    <TabIcon
      data-index={index}
      className={`icon ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      <Link to={title}>
        <img src={iconSrc} alt={title} />
        {badgeContent && badgeContent > 0 && <Badge>{badgeContent}</Badge>}
      </Link>
    </TabIcon>
  );
};

export default Tab;
