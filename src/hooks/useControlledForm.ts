import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEvent,
  FocusEventHandler,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';

import { GetPropsType, InitialBooleanType, InitialValuesType } from '../types/login';

type UseControlledFormParams<T> = {
  initialValues: T;
  validate: (values: T) => T;
  onSubmit: (values: T) => void;
};

type UseControlledFormReturnType<T> = {
  values: T;
  getProps: GetPropsType;
  errorMessages: T;
  touched: InitialBooleanType;
  handleChange: ChangeEventHandler;
  handleBlur: FocusEventHandler;
  handleSubmit: FormEventHandler;
};

const useControlledForm = <T extends InitialValuesType>({
  initialValues,
  validate,
  onSubmit,
}: UseControlledFormParams<T>): UseControlledFormReturnType<T> => {
  const touchedInitialValues = Object.keys(initialValues).reduce<InitialBooleanType>(
    (result, curr) => ({ ...result, [curr]: false }),
    {}
  );

  const [values, setValues] = useState<T>(initialValues);
  const [errorMessages, setErrorMessages] = useState<T>(initialValues);
  const [touched, setTouched] = useState<InitialBooleanType>(touchedInitialValues);

  const getProps = (name: string) => ({
    value: values[name],
    name,
    onBlur: handleBlur,
    onChange: handleChange,
  });

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [event.target.name]: true,
    }));

    const errorMessages = validate(values);
    setErrorMessages(errorMessages);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));

    setTouched((prevTouched) => ({
      ...prevTouched,
      [event.target.name]: false,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTouched((prevTouched) =>
      Object.keys(prevTouched).reduce<InitialBooleanType>(
        (result, curr) => ({
          ...result,
          [curr]: true,
        }),
        {}
      )
    );

    const errorMessages = validate(values);
    setErrorMessages(errorMessages);

    if (Object.values(errorMessages).some((value) => value)) {
      return;
    }

    onSubmit(values);
  };

  useEffect(() => {
    const errorMessages = validate(values);
    setErrorMessages(errorMessages);
  }, [values]);

  return {
    values,
    getProps,
    errorMessages,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  };
};

export default useControlledForm;
