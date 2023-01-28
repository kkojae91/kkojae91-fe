import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import Input from '../components/Input';
import useControlledForm from '../hooks/useControlledForm';
import { ValuesType } from '../types/login';
import { loginValidator } from '../utilities/validate';

const LoginPage: NextPage = () => {
  const { errorMessages, handleSubmit, touched, getProps } = useControlledForm<ValuesType>({
    initialValues: { id: '', password: '' },
    validate: loginValidator,
    onSubmit: (values: ValuesType) => {
      console.log(values);
    },
  });

  return (
    <Container onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          id='id'
          type='text'
          labelText='아이디'
          isInvalid={touched.id && errorMessages.id.length !== 0}
          errorMessage={errorMessages.id}
          getProps={getProps}
        />

        <Input
          id='password'
          type='password'
          labelText='비밀번호'
          isInvalid={touched.password && errorMessages.password.length !== 0}
          errorMessage={errorMessages.password}
          getProps={getProps}
        />
      </InputContainer>

      <LoginButton type='submit' disabled={Object.values(errorMessages).some((value) => value)}>
        로그인
      </LoginButton>
    </Container>
  );
};

export default LoginPage;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
