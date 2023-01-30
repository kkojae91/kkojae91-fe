import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

import { snackbarState } from '../../atoms/snackbar';
import { SNACKBAR_STATUS } from '../../constants';
import { snackbarAnimation } from '../../styles/animation';
import { ValueOf } from '../../types/utils';
import Portal from './Portal';

const DURATION = 3000;

const Snackbar = () => {
  const [{ isOpened, message, status }, setSnackbarState] = useRecoilState(snackbarState);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isOpened && timerRef.current) {
      clearTimeout(timerRef.current);

      return;
    }

    if (isOpened) {
      timerRef.current = setTimeout(() => {
        setSnackbarState({
          isOpened: false,
          message: '',
          status: SNACKBAR_STATUS.SUCCESS,
        });
      }, DURATION);
    }
  }, [isOpened]);

  return (
    <Portal isOpened={isOpened}>
      <Container status={status}>
        <Text>{message}</Text>
      </Container>
    </Portal>
  );
};

export default Snackbar;

const Container = styled.div<{ status: ValueOf<typeof SNACKBAR_STATUS> }>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 50%;
  bottom: 40px;

  width: 300px;
  padding: 16px;
  border-radius: 8px;

  transform: translate(-50%, 0);
  z-index: 3;

  ${({ status }) => css`
    background-color: ${status === SNACKBAR_STATUS.SUCCESS ? '#4ACECE' : '#FF9494'};
    ${snackbarAnimation}
  `}
`;

const Text = styled.p`
  color: #ffffff;
  font-weight: bold;
`;
