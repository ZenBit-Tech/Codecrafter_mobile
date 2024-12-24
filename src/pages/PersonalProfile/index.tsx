import { FC } from 'react';

import { Box } from '@mui/material';
import { t } from 'i18next';

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
      <Box
        sx={{
          marginTop: '87px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ProfilePicture isLarge />
        <TextInput
          sx={{ margin: '30px auto 15px', width: '93vw' }}
          label={t('Full Name')}
          value={full_name}
        />
        <TextInput
          sx={{ margin: '0 auto 15px', width: '93vw' }}
          label={t('Phone number')}
          value={phone_number}
        />
        <TextInput
          sx={{ margin: '0 auto 15px', width: '93vw' }}
          label={t('Email')}
          value={email}
        />
      </Box>
    </>
  );
};

export default PersonalProfile;
