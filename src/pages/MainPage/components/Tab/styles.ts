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
  position: relative;
  text-align: center;
  cursor: pointer;

  a {
    display: inline-block;
    text-decoration: none;
  }

  img {
    width: 24px;
    height: 24px;
  }

  &.active img {
    filter: brightness(1.2);
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgb(115, 103, 240);
  color: white;
  border-radius: 50%;
  font-size: 10px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(50%, -50%);
`;
