import React from 'react';
import styled from 'styled-components';

import ExceptionError from '../components/common/ExceptionError';
import { ERROR_MESSAGES, REDIRECT_BUTTON_TEXT, REDIRECT_TEXT } from '../constants/message';
import { PATHS } from '../constants/path';

const Custom404Page = () => {
  return (
    <Container>
      <ExceptionError
        title={ERROR_MESSAGES.NOT_FOUND_PAGE}
        description={REDIRECT_TEXT.TO_HOME}
        buttonText={REDIRECT_BUTTON_TEXT.TO_HOME}
        path={PATHS.HOME}
      />
    </Container>
  );
};

export default Custom404Page;

const Container = styled.article``;
