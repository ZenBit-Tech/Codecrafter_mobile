import { Button, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { t } from 'i18next';

import Modal from '@/components/Modal';
import { DAY_MONTH_YEAR, FULL_TIME } from '@/constants/dateFormats';
import { RouteStatuses } from '@/constants/status';
import { useUpdateRouteStatus } from '@/pages/RouteDetails/hooks/useUpdateRouteStatus';
import { useAppSelector } from '@/redux/hooks';

interface StartTheRouteModalProps {
  open: boolean;
  handleClose: () => void;
}

const StartTheRouteModal: React.FC<StartTheRouteModalProps> = ({
  open,
  handleClose,
}: StartTheRouteModalProps) => {
  const route = useAppSelector((state) => state.route.route);

  const { fetchUpdatedRoute } = useUpdateRouteStatus(
    route?.id,
    route?.driver.id,
    RouteStatuses.ON_TIME
  );

  const formattedArrivalDate = route?.arrival_date
    ? format(parseISO(route.arrival_date.toString()), DAY_MONTH_YEAR)
    : '-';

  const formattedArrivalTime = route?.arrival_date
    ? format(parseISO(route.arrival_date.toString()), FULL_TIME)
    : '-';

  const formattedSubmissionTime = route?.submission_date
    ? format(parseISO(route.submission_date.toString()), FULL_TIME)
    : '-';

  return (
    <Modal
      open={open}
      title={t('routes.startConfirmation')}
      description={
        <div>
          <Typography>
            {t('routes.route')}: #{route?.id}
          </Typography>
          <Typography>
            {t('routes.distance')}: {route?.distance} km
          </Typography>
          <Typography>
            {t('routes.collectionDate')}: {formattedArrivalDate}
          </Typography>
          <Typography>
            {t('routes.time')}: {formattedSubmissionTime}-{formattedArrivalTime}
          </Typography>
        </div>
      }
      actions={
        <>
          <Button fullWidth onClick={handleClose} variant='text'>
            {t('modal.cancel')}
          </Button>
          <Button
            fullWidth
            onClick={() => fetchUpdatedRoute()}
            variant='contained'
          >
            {t('modal.start')}
          </Button>
        </>
      }
      onClose={handleClose}
    />
  );
};

export default StartTheRouteModal;
