import { SxProps, Theme } from '@mui/system';

export const personalProfileBlock: SxProps<Theme> = {
  marginTop: '87px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const personalProfileInput: SxProps<Theme> = {
  margin: '0 auto 15px',
  width: '93vw',
};

export const firstInput: SxProps<Theme> = {
  ...personalProfileInput,
  margin: '30px auto 15px',
};
