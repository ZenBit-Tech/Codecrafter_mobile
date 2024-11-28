import styled from 'styled-components';

const IconScale = 1.3;
const transitionDuration = '0.5s';

export const TabIcon = styled.div`
  text-align: center;
  cursor: pointer;
  color: black;
  transition: all ${transitionDuration};
  &.active {
    transform: translateY(-39px);
  }
  &.active img {
    filter: brightness(0) invert(1);
    transform: scale(${IconScale});
  }
`;
