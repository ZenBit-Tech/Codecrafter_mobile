import { List } from '@mui/material';
import { t } from 'i18next';
import { IoCloseOutline } from 'react-icons/io5';

import {
  ButtonGroup,
  CenteredButton,
  Container,
  IconImage,
  Image,
  ImageDescription,
  ImageListItem,
  TitleInfo,
} from './styles';
import useBaggageRecord from './useBaggageRecord';

import cameraIcon from '@/assets/icons/camera.svg';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { COLORS } from '@/constants/colors';

interface PhotoItem {
  id: number;
  src: string;
  description: string;
}
// Replace with real BE data
const photoList: PhotoItem[] = [
  { id: 1, src: cameraIcon, description: t('Baggage photo 1') },
  { id: 2, src: cameraIcon, description: t('Baggage photo 2') },
];

const iconSize = 24;

const BaggageRecordingPage = (): JSX.Element => {
  const { handleNextPage, handleBack } = useBaggageRecord();

  return (
    <>
      <Header pageName={t('baggage.record.header')} hasBackIcon />
      <Container>
        <TitleInfo variant='h2'>{t('baggage.record.title')}</TitleInfo>

        <CenteredButton
          label={t('baggage.record.photo')}
          variant='colored'
          startIcon={<IconImage src={cameraIcon} alt={t('Camera')} />}
        />

        <List>
          {photoList.map((photo: PhotoItem) => (
            <ImageListItem key={photo.id}>
              <Image src={photo.src} alt={photo.description} />
              <ImageDescription variant='body1'>
                {photo.description}
              </ImageDescription>
              <IoCloseOutline color={COLORS.text.onSurface} size={iconSize} />
            </ImageListItem>
          ))}
        </List>

        <ButtonGroup>
          <Button
            label={t('baggage.record.back')}
            variant='linedGrey'
            fullWidth
            onClick={handleBack}
          />
          <Button
            label={t('baggage.record.record')}
            variant='colored'
            fullWidth
            onClick={handleNextPage}
          />
        </ButtonGroup>
      </Container>
    </>
  );
};

export default BaggageRecordingPage;
