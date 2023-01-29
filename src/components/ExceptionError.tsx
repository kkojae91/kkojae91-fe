import Link from 'next/link';
import styled from 'styled-components';

type ExceptionErrorProps = {
  title: string;
  description: string;
  buttonText: string;
  path: string;
};

const ExceptionError = ({ title, description, buttonText, path }: ExceptionErrorProps) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>

      <Link href={path}>
        <Button type='button'>{buttonText}</Button>
      </Link>
    </Container>
  );
};

export default ExceptionError;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin-top: 30px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  font-size: 14px;
  text-align: center;
`;

const Button = styled.button`
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;
`;
