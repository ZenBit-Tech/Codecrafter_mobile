import { FC } from 'react';

import { t } from 'i18next';

import Call from '@/assets/icons/call.svg';
import {
  CollectionBody,
  CollectionHeading,
  CustomerWrapper,
  IconWrapper,
  StyledHeading,
} from '@/pages/OrderDetails/components/styles';

interface DispatcherInformationProps {
  dispatcherName: string;
  dispatcherPhone: string;
}

const DispatcherInformation: FC<DispatcherInformationProps> = ({
  dispatcherName,
  dispatcherPhone,
}) => {
  return (
    <div>
      <StyledHeading variant='subtitle1'>
        {t('orderDetails.dispatcherInfo')}
      </StyledHeading>
      <CustomerWrapper>
        <div>
          <CollectionHeading variant='body2'>
            {t('orderDetails.dispatcherName')}:
          </CollectionHeading>
          <CollectionBody variant='body1'>{dispatcherName}</CollectionBody>
          <CollectionHeading variant='body2'>
            {t('orderDetails.phone')}:
          </CollectionHeading>
          <CollectionBody variant='body1'>{dispatcherPhone}</CollectionBody>
        </div>
        <IconWrapper>
          <a href={`tel:${dispatcherPhone}`}>
            <img src={Call} alt={t('orders.call')} />
          </a>
        </IconWrapper>
      </CustomerWrapper>
    </div>
  );
};

export default DispatcherInformation;
