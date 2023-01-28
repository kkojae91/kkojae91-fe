import { fetcher } from '.';
import { PATHS } from '../constants/path';

type LoginSuccessResponseData = {
  data: {
    accessToken: string;
    user: {
      id: string;
      name: string;
    };
  };
};

type PostLogin = (userInfo: { id: string; password: string }) => Promise<LoginSuccessResponseData>;

export const postLogin: PostLogin = async (userInfo) => {
  const { data } = await fetcher.post<LoginSuccessResponseData>(PATHS.LOGIN, userInfo);

  return data;
};
