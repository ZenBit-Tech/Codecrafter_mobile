import { FC } from 'react';

import { t } from 'i18next';

import './Person.css';
import asd from '@/assets/icons/call.svg';

interface Props {
  firstName: string;
  lastName: string;
}
const Person: FC<Props> = ({ firstName, lastName }) => {
  return (
    <p className='Person'>
      {' '}
      <img src={asd} alt='asd' /> <br /> {t('First Name :')} {firstName}{' '}
      {t(', Last Name :')} {lastName}
    </p>
  );
};

export default Person;