import { ERROR_MESSAGES } from '../constants/message';
import { ValuesType } from '../types/login';

type IsInvalidId = (id: string) => boolean;

// 영문 대문자, 소문자, 숫자로 이뤄진 5자 이상 30자 이하(영문 대문자, 소문자, 숫자 중 일부만 포함되어도 된다.)
export const isInvalidId: IsInvalidId = (id) => !/^[A-Za-z0-9]{5,30}$/.test(id);

type IsInvalidPassword = (password: string) => boolean;

// 영문 대문자, 소문자, 숫자가 모두 포함된 8자 이상 30자 이하로 작성해야한다.
export const isInvalidPassword: IsInvalidPassword = (password) =>
  !/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,30}$/.test(password);

type LoginValidator = (values: ValuesType) => ValuesType;

export const loginValidator: LoginValidator = (values) => {
  const errorMessages = {
    id: '',
    password: '',
  };

  if (isInvalidId(values.id)) {
    errorMessages.id = ERROR_MESSAGES.WRONG_ID;
  }

  if (isInvalidPassword(values.password)) {
    errorMessages.password = ERROR_MESSAGES.WRONG_PASSWORD;
  }

  return errorMessages;
};
