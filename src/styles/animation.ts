import { css, keyframes } from 'styled-components';

const skeletonKeyframes = keyframes`
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
  animation: ${skeletonKeyframes} 1.2s infinite ease-out;
`;

const loadingSpinnerKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const loadingSpinnerAnimation = css`
  animation: ${loadingSpinnerKeyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;

const snackbarKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const snackbarAnimation = css`
  animation: ${snackbarKeyframes} 3s ease-in-out;
`;
