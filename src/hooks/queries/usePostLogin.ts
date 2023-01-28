import { useMutation } from 'react-query';

import { postLogin } from '../../api/login';
import { QUERY_KEY } from '../../constants/key';

type UsePostLoginParams = {
  setLoginInfo: ({ accessToken, userName }: { accessToken: string; userName: string }) => void;
};

const usePostLogin = ({ setLoginInfo }: UsePostLoginParams) => {
  return useMutation([QUERY_KEY.POST_LOGIN], postLogin, {
    onSuccess: (data) => {
      const { accessToken, user } = data.data;
      setLoginInfo({ accessToken, userName: user.name });
    },
  });
};

export default usePostLogin;
