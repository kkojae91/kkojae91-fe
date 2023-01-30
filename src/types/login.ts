import { ChangeEventHandler, FocusEventHandler } from 'react';

export type ValuesType = {
  id: string;
  password: string;
};

export type InitialValuesType = Record<PropertyKey, string>;

export type InitialBooleanType = Record<PropertyKey, boolean>;

export type GetPropsType = (name: string) => {
  value: string;
  name: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
};
