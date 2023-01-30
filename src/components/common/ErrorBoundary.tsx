import { AxiosError } from 'axios';
import { Component } from 'react';

import Header from '../layout/Header';
import ExceptionError from './ExceptionError';
import { ERROR_MESSAGES, REDIRECT_BUTTON_TEXT, REDIRECT_TEXT } from '../../constants/message';
import { PATHS } from '../../constants/path';
import { Content } from '../../pages/_app';
import { StrictPropsWithChildren } from '../../types/utils';

type ResponseError = {
  error: {
    message: string;
  };
};

type State = {
  hasError: boolean;
  errorTitle: string;
  description: string;
  path: string;
  buttonText: string;
};

class ErrorBoundary extends Component<StrictPropsWithChildren, State> {
  public state: State = {
    hasError: false,
    errorTitle: '',
    description: '',
    path: '',
    buttonText: '',
  };

  public static getDerivedStateFromError(error: AxiosError): State {
    const responseError = error.response?.data as ResponseError;
    const errorMessage = responseError.error.message;

    if (errorMessage === 'Product not found' || errorMessage === 'Products not found') {
      return {
        hasError: true,
        errorTitle: ERROR_MESSAGES.NOT_FOUND_PAGE,
        description: REDIRECT_TEXT.TO_HOME,
        path: PATHS.HOME,
        buttonText: REDIRECT_BUTTON_TEXT.TO_HOME,
      };
    }

    return {
      hasError: true,
      errorTitle: ERROR_MESSAGES.EXCEPTION,
      description: REDIRECT_TEXT.TO_HOME,
      path: PATHS.HOME,
      buttonText: REDIRECT_BUTTON_TEXT.TO_HOME,
    };
  }

  public render() {
    if (this.state.hasError)
      return (
        <Content>
          <Header isErrorBoundaryHeader={true} />

          <ExceptionError
            title={this.state.errorTitle}
            description={this.state.description}
            buttonText={this.state.buttonText}
            path={this.state.path}
          />
        </Content>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
