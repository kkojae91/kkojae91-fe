import { useSetRecoilState } from 'recoil';

import { snackbarState } from '../atoms/snackbar';
import { SNACKBAR_STATUS } from '../constants';

type openHandler = (message: string) => void;

type UseSnackbarReturnType = {
  openSuccessSnackbar: openHandler;
  openFailureSnackbar: openHandler;
};

const useSnackbar = (): UseSnackbarReturnType => {
  const setSnackbarState = useSetRecoilState(snackbarState);

  const openSuccessSnackbar = (message: string) => {
    setSnackbarState({
      isOpened: true,
      message,
      status: SNACKBAR_STATUS.SUCCESS,
    });
  };

  const openFailureSnackbar = (message: string) => {
    setSnackbarState({
      isOpened: true,
      message,
      status: SNACKBAR_STATUS.FAIL,
    });
  };

  return { openSuccessSnackbar, openFailureSnackbar };
};

export default useSnackbar;
