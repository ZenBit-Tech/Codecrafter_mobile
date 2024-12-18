import { FC } from 'react';

import { t } from 'i18next';

import {
  CollectionBody,
  CollectionHeading,
  CollectionWrapper,
  StyledHeading,
} from '@/pages/OrderDetails/components/styles';

interface CollectioInformationProps {
  collectionDate: string;
  collectionTimeSlot: string;
  collectionAddress: string;
}

const CollectioInformation: FC<CollectioInformationProps> = ({
  collectionDate,
  collectionTimeSlot,
  collectionAddress,
}) => {
  return (
    <div>
      <StyledHeading variant='subtitle1'>
        {' '}
        {t('orderDetails.collectionInformation')}
      </StyledHeading>
      <CollectionWrapper>
        <CollectionHeading variant='body2'>
          {t('orderDetails.collectionDate')}:
        </CollectionHeading>
        <CollectionBody variant='body1'>
          {t('orderDetails.date')}: {collectionDate}
        </CollectionBody>
        <CollectionBody variant='body1'>
          {t('orderDetails.timeSlot')}: {collectionTimeSlot}
        </CollectionBody>
        <CollectionHeading variant='body2'>
          {t('orderDetails.collectionAddress')}:
        </CollectionHeading>
        <CollectionBody variant='body1'>{collectionAddress}</CollectionBody>
      </CollectionWrapper>
    </div>
  );
};

export default CollectioInformation;
