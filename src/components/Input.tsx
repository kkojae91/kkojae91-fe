import React from 'react';
import styled, { css } from 'styled-components';

import { GetPropsType } from '../types/login';

type InputProps = {
  id: string;
  type: string;
  labelText: string;
  isInvalid: boolean;
  errorMessage: string;
  getProps: GetPropsType;
};

const Input = ({ id, type, labelText, isInvalid, errorMessage, getProps }: InputProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{labelText}</Label>
      <TextInput {...getProps(id)} id={id} type={type} isInvalidText={isInvalid} />

      {isInvalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: #6c6c7d;
`;

const TextInput = styled.input<{ isInvalidText: boolean }>`
  padding: 16px;
  margin-top: 8px;
  border-radius: 12px;

  ${({ isInvalidText }) => css`
    background: ${isInvalidText ? '#fdedee' : '#f7f7fa'};
  `}
`;

const ErrorMessage = styled.p`
  margin-top: 8px;
  font-weight: 400;
  font-size: 13px;
  color: #ed4e5c;
`;
