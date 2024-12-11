import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import {
  addressBoxStyles,
  addressDetailsStyles,
  lineStyles,
  statusIconStyles,
} from './styles';

import StatusIcon from '@/pages/RouteDetails/components/StatusIcon';
import { useDottedLine } from '@/pages/RouteDetails/hooks/useDottedLine';
import { Address } from '@/types/route';

interface AddressListProps {
  addresses: Address[];
}

const AddressList: React.FC<AddressListProps> = ({
  addresses,
}: AddressListProps) => {
  const { lineRef, iconRefs } = useDottedLine();

  return (
    <Box sx={{ position: 'relative', marginBottom: 2 }}>
      <Box ref={lineRef} sx={lineStyles} />
      {addresses.map((item, index) => (
        <Box key={item.id} sx={addressBoxStyles}>
          <Box
            ref={(el) => {
              if (el instanceof HTMLDivElement && iconRefs.current)
                iconRefs.current[index] = el;
            }}
            className='status-icon'
            sx={statusIconStyles}
          >
            <StatusIcon status={item.status.trim()} />
          </Box>
          <Box sx={addressDetailsStyles}>
            <Typography variant='body1' component='p'>
              <strong>{t('orders.collectionAddress')}</strong>
              <br /> {item.address}
            </Typography>
            <Typography variant='body2' component='p'>
              <strong>{t(`orders.statuses.${item.status}`)}:</strong>{' '}
              {item.time}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AddressList;
