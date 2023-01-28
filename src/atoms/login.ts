import { atom } from 'recoil';

export const loginState = atom<{ userName: string; isLogin: boolean }>({
  key: 'loginState',
  default: {
    userName: '',
    isLogin: false,
  },
});
