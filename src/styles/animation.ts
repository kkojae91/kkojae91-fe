import { css, keyframes } from 'styled-components';

const skeletonKeyFrames = keyframes`
  0% {
    background-color: rgba(242, 243, 247, 1);
  }
  50% {
    background-color: rgba(242, 243, 247, 0.5);
  }
  100% {
    background-color: rgba(242, 243, 247, 1);
  }
`;

export const skeletonAnimation = css`
  animation: ${skeletonKeyFrames} 1.2s infinite ease-out;
`;

const loadingSpinnerKeyFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const loadingSpinnerAnimation = css`
  animation: ${loadingSpinnerKeyFrames} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;
