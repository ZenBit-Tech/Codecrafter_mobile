import { FC } from 'react';

import { t } from 'i18next';

import {
  CollectionBody,
  CollectionHeading,
  CollectionWrapper,
  StyledHeading,
} from '@/pages/OrderDetails/components/styles';

interface DepartureInformationProps {
  orderDate: string;
  orderTimeSlot: string;
  orderDepartureAirport: string;
}

const DepartureInformation: FC<DepartureInformationProps> = ({
  orderDate,
  orderTimeSlot,
  orderDepartureAirport,
}) => {
  return (
    <div>
      <StyledHeading variant='subtitle1'>
        {t('orderDetails.departureInfo')}
      </StyledHeading>
      <CollectionWrapper>
        <CollectionHeading variant='body2'>
          {t('orderDetails.departureDate')}
        </CollectionHeading>
        <CollectionBody variant='body1'>
          {t('orderDetails.date')}: {orderDate}
        </CollectionBody>
        <CollectionBody variant='body1'>
          {t('orderDetails.timeSlot')}: {orderTimeSlot}
        </CollectionBody>
        <CollectionHeading variant='body2'>
          {t('orderDetails.departureAirport')}:
        </CollectionHeading>
        <CollectionBody variant='body1'>{orderDepartureAirport}</CollectionBody>
      </CollectionWrapper>
    </div>
  );
};

export default DepartureInformation;
