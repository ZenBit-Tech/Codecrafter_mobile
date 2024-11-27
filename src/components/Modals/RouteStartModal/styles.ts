import styled from 'styled-components';

import { COLORS } from '@/constants/colors.ts';
import { FONT } from '@/constants/font.ts';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: 90%;
  max-width: 320px;
  min-height: 350px;
  max-height: 90%;
  background: ${COLORS.text.white};
  border-radius: 16px;
  border: 1px solid ${COLORS.main.dark};
  box-shadow: 0 2px 10px ${COLORS.boxShadow.dark};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${FONT.family};
`;

export const ModalContent = styled.div`
  background: ${COLORS.white};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  font-family: ${FONT.family};
`;

export const Title = styled.h3`
  font-size: ${FONT.fontSize.title}px;
  font-weight: ${FONT.fontWeight.large};
  text-align: center;
  margin-bottom: 10px;
  margin-top: 0;
  color: ${COLORS.text.dark};
`;

export const Description = styled.p`
  text-align: left;
  margin: 10px 0 20px 0;
  font-size: ${FONT.fontSize.medium};
  font-weight: ${FONT.fontWeight.large};
  flex-grow: 1;
  color: ${COLORS.text.dark};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const Info = styled.p`
  margin: 0;
  font-size: ${FONT.fontSize.small};
  font-weight: ${FONT.fontWeight.small};
  line-height: 1.5;
  color: ${COLORS.text.dark};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const CancelButton = styled.button`
  background: transparent;
  color: ${COLORS.text.dark};
  border: 1px solid ${COLORS.border.dark};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 173px;
  font-family: ${FONT.family};
  font-size: ${FONT.fontSize.medium};
  font-weight: ${FONT.fontWeight.medium};

  &:hover {
    background: ${COLORS.background.logoBlock};
  }
`;

export const ConfirmButton = styled.button`
  background: ${COLORS.purple};
  color: ${COLORS.white};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 173px;
  font-family: ${FONT.family};
  font-size: ${FONT.fontSize.medium};
  font-weight: ${FONT.fontWeight.medium};

  &:hover {
    background: ${COLORS.hoverPurple};
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${COLORS.boxShadow.dark};
  z-index: 1000;
`;
