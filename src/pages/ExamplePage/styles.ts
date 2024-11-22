import styled from 'styled-components';

import { FONT } from '@/constants/font';

export const ExampleWrapper = styled.div`
  padding: 24px;
  font-family: ${FONT.family};
  width: 450px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;
