import { FC } from 'react';

import { Box } from '@mui/material';
import { t } from 'i18next';

import {
  firstInput,
  personalProfileBlock,
  personalProfileInput,
} from './styles';

import Header from '@/components/Header';
import ProfilePicture from '@/components/ProfilePicture';
import TextInput from '@/components/TextInput';
import { useAppSelector } from '@/redux/hooks';

const PersonalProfile: FC = () => {
  const { full_name, phone_number, email } = useAppSelector(
    (store) => store.auth.user
  );

  return (
    <>
      <Header pageName={t('Personal Profile')} />
      <Box sx={personalProfileBlock}>
        <ProfilePicture isLarge />
        <TextInput sx={firstInput} label={t('Full Name')} value={full_name} />
        <TextInput
          sx={personalProfileInput}
          label={t('Phone number')}
          value={phone_number}
        />
        <TextInput sx={personalProfileInput} label={t('Email')} value={email} />
      </Box>
    </>
  );
};

export default PersonalProfile;
