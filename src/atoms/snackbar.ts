import { atom } from 'recoil';

import { SNACKBAR_STATUS } from '../constants';
import { ValueOf } from '../types/utils';

type SnackbarState = {
  isOpened: boolean;
  message: string;
  status: ValueOf<typeof SNACKBAR_STATUS>;
};

export const snackbarState = atom<SnackbarState>({
  key: 'snackbarState',
  default: {
    isOpened: false,
    message: '',
    status: SNACKBAR_STATUS.SUCCESS,
  },
});
