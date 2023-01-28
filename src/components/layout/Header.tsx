import Link from 'next/link';
import styled from 'styled-components';
import { PATHS } from '../../constants/path';

import useSetAuthorization from '../../hooks/useSetAuthorization';

const Header = () => {
  const { isLogin, userName, logout } = useSetAuthorization();

  return (
    <Container>
      <Title>
        <Link href={PATHS.HOME}>HAUS</Link>
      </Title>

      {isLogin && (
        <div>
          <p>{userName}</p>
          <button type='button' onClick={logout}>
            logout
          </button>
        </div>
      )}

      {!isLogin && (
        <p>
          <Link href={PATHS.LOGIN}>login</Link>
        </p>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
`;
