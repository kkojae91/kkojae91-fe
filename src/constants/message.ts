export const ERROR_MESSAGES = {
  WRONG_ID: '올바른 아이디 형식으로 입력해주세요.',
  WRONG_PASSWORD: '올바른 비밀번호 형식으로 입력해주세요.',
  NOT_FOUND_PAGE: '존재하지 않는 페이지입니다.',
  NOT_FOUND_USER: '존재하지 않는 유저입니다.',
  EXCEPTION: '예상치 못한 에러가 발생했습니다.',
} as const;

export const SUCCESS_MESSAGES = {
  LOGIN: '정상적으로 로그인 되었습니다.',
  LOGOUT: '정상적으로 로그아웃 되었습니다.',
} as const;

export const REDIRECT_TEXT = {
  TO_HOME: '홈으로 돌아가시려면 아래 버튼을 클릭해주세요.',
  TO_LOGIN: '다시 로그인하시려면 아래 버튼을 클릭해주세요.',
} as const;

export const REDIRECT_BUTTON_TEXT = {
  TO_HOME: '홈으로 가기',
  TO_LOGIN: '로그인 하러가기',
} as const;
