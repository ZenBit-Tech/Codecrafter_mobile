import { Typography } from '@mui/material';
import { FC } from 'react';

import { OrderDataWrapper } from './styles';

import { COLORS } from '@/constants/colors';

interface OrderInfoProps {
  itemTitle: string;
  itemContent: string;
}

const OrderInfo: FC<OrderInfoProps> = ({ itemTitle, itemContent }) => {
  return (
    <OrderDataWrapper>
      <div>
        <Typography variant='body2'>{itemTitle}</Typography>
      </div>
      <div>
        <Typography sx={{ color: COLORS.schemes.outline }}>
          {itemContent}
        </Typography>
      </div>
    </OrderDataWrapper>
  );
};

export default OrderInfo;
