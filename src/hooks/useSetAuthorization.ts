import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { loginState } from '../atoms/login';
import { PATHS } from '../constants/path';
import { STORAGE_KEYS } from '../constants/key';
import useSnackbar from './useSnackbar';
import { SUCCESS_MESSAGES } from '../constants/message';

type UseSetAuthorizationReturnType = {
  isLogin: boolean;
  userName: string;
  setLoginInfo: ({ accessToken, userName }: { accessToken: string; userName: string }) => void;
  logout: VoidFunction;
};

const useSetAuthorization = (): UseSetAuthorizationReturnType => {
  const router = useRouter();
  const [{ userName, isLogin }, setLoginState] = useRecoilState(loginState);
  const { openSuccessSnackbar } = useSnackbar();

  const setLoginInfo = ({ accessToken, userName }: { accessToken: string; userName: string }) => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    localStorage.setItem(STORAGE_KEYS.USER_NAME, userName);

    setLoginState({ userName, isLogin: true });

    router.push(PATHS.HOME);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_NAME);

    setLoginState({
      userName,
      isLogin: false,
    });

    openSuccessSnackbar(SUCCESS_MESSAGES.LOGOUT);

    router.push(PATHS.HOME);
  };

  useEffect(() => {
    const userName = localStorage.getItem(STORAGE_KEYS.USER_NAME) ?? '';

    setLoginState({ userName, isLogin: !!userName });
  }, []);

  return {
    isLogin,
    userName,
    setLoginInfo,
    logout,
  };
};

export default useSetAuthorization;
