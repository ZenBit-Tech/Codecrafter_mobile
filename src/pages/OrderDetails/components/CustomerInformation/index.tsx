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

interface CustomerInformationProps {
  bagTitle: string;
  bagSize: string;
  bagWeight: string;
  customerName: string;
  customerPhone: string;
}

const CustomerInformation: FC<CustomerInformationProps> = ({
  bagTitle,
  bagSize,
  bagWeight,
  customerName,
  customerPhone,
}) => {
  return (
    <div>
      <StyledHeading variant='subtitle1'>
        {t('orderDetails.collectionInformation')}
      </StyledHeading>
      <CustomerWrapper>
        <div>
          <CollectionHeading variant='body2'>
            {t('orderDetails.customerName')}:
          </CollectionHeading>
          <CollectionBody variant='body1'>{bagTitle}</CollectionBody>
          <CollectionBody variant='body1'>{bagSize}</CollectionBody>
          <CollectionBody variant='body1'>
            {t('orderDetails.weight')}: {bagWeight}
          </CollectionBody>
          <CollectionHeading variant='body2'>
            {t('orderDetails.luggageSize')}:
          </CollectionHeading>
          <CollectionBody variant='body1'>{customerName}</CollectionBody>
          <CollectionHeading variant='body2'>
            {t('orderDetails.phone')}:
          </CollectionHeading>
          <CollectionBody variant='body1'>{customerPhone}</CollectionBody>
        </div>
        <IconWrapper>
          <a href={`tel:${customerPhone}`}>
            <img src={Call} alt={t('orders.call')} />
          </a>
        </IconWrapper>
      </CustomerWrapper>
    </div>
  );
};

export default CustomerInformation;
