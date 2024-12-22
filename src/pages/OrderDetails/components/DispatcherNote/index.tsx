import { FC } from 'react';

import { t } from 'i18next';

import {
  CollectionBody,
  CollectionWrapper,
  StyledHeading,
} from '@/pages/OrderDetails/components/styles';

interface DispatcherNoteProps {
  note: string;
}

const CollectioInformation: FC<DispatcherNoteProps> = ({ note }) => {
  return (
    <div>
      <StyledHeading variant='subtitle1'>
        {t('orderDetails.note')}
      </StyledHeading>
      <CollectionWrapper>
        <CollectionBody variant='body1'>{note}</CollectionBody>
      </CollectionWrapper>
    </div>
  );
};

export default CollectioInformation;
