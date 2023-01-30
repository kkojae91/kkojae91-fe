import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { PATHS } from '../../constants/path';
import useLogin from '../../hooks/useSetAuthorization';

const withLogin = (PageComponent: NextPage, isLoginRequired: boolean) => {
  const Component = () => {
    const router = useRouter();
    const { isLogin } = useLogin();

    if (isLogin === isLoginRequired) {
      return <PageComponent />;
    }

    router.push(PATHS.HOME);

    return null;
  };

  return Component;
};

export default withLogin;
