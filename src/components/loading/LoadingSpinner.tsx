import styled from 'styled-components';

import { loadingSpinnerAnimation } from '../../styles/animation';

const LoadingSpinner = () => {
  return (
    <Container>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Container>
  );
};

export default LoadingSpinner;

const Container = styled.div`
  display: inline-block;

  width: 80px;
  height: 80px;

  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div`
  ${loadingSpinnerAnimation}
  transform-origin: 40px 40px;

  &:after {
    content: ' ';
    display: block;

    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000000;
    margin: -4px 0 0 -4px;

    position: absolute;
  }

  &:nth-child(1) {
    animation-delay: -0.036s;
  }

  &:nth-child(1):after {
    top: 63px;
    left: 63px;
  }

  &:nth-child(2) {
    animation-delay: -0.072s;
  }

  &:nth-child(2):after {
    top: 68px;
    left: 56px;
  }

  &:nth-child(3) {
    animation-delay: -0.108s;
  }

  &:nth-child(3):after {
    top: 71px;
    left: 48px;
  }

  &:nth-child(4) {
    animation-delay: -0.144s;
  }

  &:nth-child(4):after {
    top: 72px;
    left: 40px;
  }

  &:nth-child(5) {
    animation-delay: -0.18s;
  }

  &:nth-child(5):after {
    top: 71px;
    left: 32px;
  }

  &:nth-child(6) {
    animation-delay: -0.216s;
  }

  &:nth-child(6):after {
    top: 68px;
    left: 24px;
  }

  &:nth-child(7) {
    animation-delay: -0.252s;
  }

  &:nth-child(7):after {
    top: 63px;
    left: 17px;
  }

  &:nth-child(8) {
    animation-delay: -0.288s;
  }

  &:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`;
