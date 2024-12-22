import { FC } from 'react';

import { Box, List } from '@mui/material';
import { t } from 'i18next';
import { IoCloseOutline } from 'react-icons/io5';

import {
  ButtonGroup,
  Container,
  EmptyIcon,
  IconImage,
  Image,
  ImageDescription,
  ImageListItem,
  TitleInfo,
} from './styles';
import useBaggageRecord from './useBaggageRecord';

import imageIcon from '@/assets/icons/image.svg';
import uploadIcon from '@/assets/icons/upload.svg';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { COLORS } from '@/constants/colors';

const iconSize = 28;
const stringLength = 20;

const BaggageRecordingPage: FC = () => {
  const {
    photoList,
    loading,
    handleImageUpload,
    handleImageDelete,
    handleNextPage,
    handleBack,
    truncateString,
  } = useBaggageRecord();

  if (loading) {
    return <Loader isLoading />;
  }

  return (
    <>
      <Header pageName={t('baggage.record.header')} hasBackIcon />
      <Container>
        <TitleInfo variant='h2'>{t('baggage.record.title')}</TitleInfo>

        <List>
          {photoList.map((photo) => (
            <ImageListItem key={photo.id}>
              {photo.src ? (
                <Image src={photo.src} alt={photo.description} />
              ) : (
                <EmptyIcon src={imageIcon} alt={t('Image')} />
              )}
              <Box flex={1}>
                <ImageDescription variant='body1'>
                  {truncateString(photo.name, stringLength) ||
                    t('baggage.record.noUploaded')}
                </ImageDescription>
                <ImageDescription variant='body1'>
                  {photo.description}
                </ImageDescription>
              </Box>
              <IconImage
                src={uploadIcon}
                alt={t('Upload')}
                onClick={() => handleImageUpload(photo.id)}
              />
              <IoCloseOutline
                color={COLORS.text.onSurface}
                size={iconSize}
                onClick={() => handleImageDelete(photo.id)}
              />
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
