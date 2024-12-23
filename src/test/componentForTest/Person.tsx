import { FC } from 'react';

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
      <img src={asd} alt='asd' /> <br /> First Name : {firstName} , Last Name :{' '}
      {lastName}
    </p>
  );
};

export default Person;
