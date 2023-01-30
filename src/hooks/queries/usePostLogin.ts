import { useMutation } from 'react-query';

import { postLogin } from '../../api/login';
import { QUERY_KEY } from '../../constants/key';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../../constants/message';
import useSnackbar from '../useSnackbar';

type UsePostLoginParams = {
  setLoginInfo: ({ accessToken, userName }: { accessToken: string; userName: string }) => void;
};

const usePostLogin = ({ setLoginInfo }: UsePostLoginParams) => {
  const { openSuccessSnackbar, openFailureSnackbar } = useSnackbar();

  return useMutation([QUERY_KEY.POST_LOGIN], postLogin, {
    onSuccess: (data) => {
      const { accessToken, user } = data.data;
      setLoginInfo({ accessToken, userName: user.name });
      openSuccessSnackbar(SUCCESS_MESSAGES.LOGIN);
    },

    onError: () => {
      openFailureSnackbar(ERROR_MESSAGES.NOT_FOUND_USER);
    },
  });
};

export default usePostLogin;
