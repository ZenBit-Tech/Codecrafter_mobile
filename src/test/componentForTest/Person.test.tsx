import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Person from './Person';

test('Renders Person component correctly', async () => {
  const { getByText } = render(
    <Person firstName='Nathan' lastName='Krasney' />
  );

  expect(document.getElementsByTagName('p').length).toBe(1);

  const htmlElement = getByText('First Name : Nathan , Last Name : Krasney');

  expect(htmlElement).not.toBeFalsy();
  expect(htmlElement).toBeInTheDocument();
});
