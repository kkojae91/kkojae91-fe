import Link from 'next/link';
import styled from 'styled-components';
import { PATHS } from '../../constants/path';

import useSetAuthorization from '../../hooks/useSetAuthorization';

type HeaderProps = {
  isErrorBoundaryHeader?: boolean;
};

const Header = ({ isErrorBoundaryHeader = false }: HeaderProps) => {
  const { isLogin, userName, logout } = useSetAuthorization();

  return (
    <Container>
      <Title>
        {isErrorBoundaryHeader && <a href={PATHS.HOME}>HAUS</a>}
        {!isErrorBoundaryHeader && <Link href={PATHS.HOME}>HAUS</Link>}
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
          {isErrorBoundaryHeader && <a href={PATHS.LOGIN}>login</a>}
          {!isErrorBoundaryHeader && <Link href={PATHS.LOGIN}>login</Link>}
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
