import { Box, Checkbox, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { t } from 'i18next';
import { Dispatch, FC, SetStateAction } from 'react';

import { TicketModal } from './components/TicketModal';
import {
  boardingPassVerificationContainer,
  confirmInformContainer,
  confirmInformTitle,
  customerInformationContainer,
  customerProp,
  customerPropTitle,
  showTicketBtn,
  showTicketContainer,
  showTicketTitle,
  title,
} from './styles';
import { useGetOrder } from './useGetOrder';

import BackIcon from '@/assets/icons/back.svg';
import Button from '@/components/Button';
import { DATE_FORMAT, FULL_TIME } from '@/constants/dateFormats';
import { useToggleVisible } from '@/hooks/useToggleVisible';

interface CustomerInformInterface {
  handleChoose: Dispatch<SetStateAction<boolean>>;
}

export const BoardingPassInformBlock: FC<CustomerInformInterface> = ({
  handleChoose,
}) => {
  const { orderInform } = useGetOrder();
  const [isTicketVisible, toggleIsTicketVisible] = useToggleVisible();
  const date = dayjs(orderInform?.collection_date).format(DATE_FORMAT);
  const time = dayjs(orderInform?.collection_time_start).format(FULL_TIME);

  return (
    <Box sx={boardingPassVerificationContainer}>
      <Typography sx={title}>
        Ask for the customer’s Boarding pass and verify it against the booking
        information
      </Typography>

      <Box sx={customerInformationContainer}>
        <Typography sx={customerPropTitle}>Customer name:</Typography>
        <Typography sx={customerProp}>{orderInform?.full_name}</Typography>

        <Typography sx={customerPropTitle}>Departure date:</Typography>
        <Typography sx={customerProp}>Date: {date}</Typography>
        <Typography sx={customerProp}>Time: {time}</Typography>

        <Typography sx={customerPropTitle}>Flight information:</Typography>
        <Typography sx={customerProp}>
          Airport: {orderInform?.airport_name}
        </Typography>
        <Typography sx={customerProp}>
          Flight: {orderInform?.flight_id}
        </Typography>
      </Box>

      <Box sx={showTicketContainer}>
        <Typography sx={showTicketTitle}>Boarding pass uploaded</Typography>
        <Button
          sx={showTicketBtn}
          label='show'
          variant='outlined'
          onClick={toggleIsTicketVisible}
        />
      </Box>
      {isTicketVisible && (
        <TicketModal ticketImageLink={orderInform?.ticket_photo || ''}>
          <Box
            component='img'
            src={BackIcon}
            alt={t('back')}
            onClick={toggleIsTicketVisible}
          />
        </TicketModal>
      )}

      <Box sx={confirmInformContainer}>
        <Checkbox
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChoose(event.target.checked);
          }}
        />
        <Typography sx={confirmInformTitle}>
          I confirm that information match
        </Typography>
      </Box>
    </Box>
  );
};
