# 식스샵 프론트개발자 채용 과제

- [과제 안내 링크](https://www.notion.so/sixshop/af7f8a9586b648e6ba92a8c24ff0ef66)
- 과제 제출 기한은 과제 메일 발송일로부터 7일 후 자정 12시까지 입니다. 기한을 꼭 지켜주세요.

# 기술 요구 사항

## 1) 로그인 (`/login`)

- [x] 제공된 디자인을 참고하여 input 컴포넌트를 구현해주세요.
- [x] 아이디 형식
  - [x] 영문 대문자와 영문 소문자, 숫자가 포함될 수 있습니다. (세 가지 중 _일부만_ 포함되어도 됩니다.)
  - [x] 5자 이상 30자 이하로 작성해야 합니다.
  - [x] 유효하지 않은 값인 경우, `올바른 아이디 형식으로 입력해주세요.` 라는 에러 메세지를 input focus가 해제되는 시점에 보여줍니다.
  - [x] 유효한 값을 입력하면 에러 메세지가 사라집니다.
- [x] 비밀번호 형식
  - [x] 영문 대문자, 영문 소문자와 숫자가 _모두_ 포함되어야 합니다.
  - [x] 8자 이상 30자 이하로 작성해야 합니다.
  - [x] 유효하지 않은 값인 경우, `올바른 비밀번호 형식으로 입력해주세요.` 라는 에러 메세지를 input focus가 해제되는 시점에 보여줍니다.
  - [x] 유효한 값을 입력하면 에러 메세지가 사라집니다.
- [x] input 값이 유효한 경우에만 로그인 버튼이 활성화됩니다.
- [x] 로그인 버튼 클릭하면 로그인 API를 이용해서 로그인을 합니다. 로그인이 성공하면 홈 화면(`/`)으로 이동합니다.
- [x] 로그인이 되어있지 않다면 어느 페이지에서든 헤더 우측에 `login` 버튼이 노출됩니다.
- [x] 로그인이 되어 있다면 어느 페이지에서든 헤더 우측에 `user name`텍스트와 `logout` 버튼이 노출됩니다.
- [x] 헤더의 `logout` 버튼을 클릭하면 로그아웃 처리 후 헤더 우측은 `login` 버튼으로 변경됩니다.
- [x] 로그인 된 상태에서 로그인 화면(`/login`)에 진입하면 홈 화면(`/`)으로 리다이렉트됩니다.
- [x] 새로고침 시에도 로그인이 유지되어야 합니다.
- [x] 전역 상태는 상태관리 라이브러리나 관련 API를 자유롭게 선택해서 관리해주세요.
      (ex. jotai, zustand, recoil, redux, context api 등)

## 2) 페이지네이션 (`/?page={number}`)

- [x] 상품 목록 조회 API를 이용해서 상품 리스트를 보여주세요.
- [x] Pagination 컴포넌트와 usePagination 커스텀훅을 구현해주세요.
- [x] 한 페이지 당 보여지는 상품의 개수는 10개입니다.
- [x] 상품을 클릭하면 상품 상세(`/products/{id}`)로 이동합니다.
- [x] 상품 가격은 세 자리마다 콤마(,)로 구분해주세요.
- [x] 이전 범위 버튼(<)을 클릭하면 이전 범위의 마지막 페이지를 보여줍니다.
      (ex. 6~10 페이지가 보여지는 상황에서 버튼 클릭 시 1~5가 보이고 5페이지로 이동)
- [x] 다음 범위 버튼(>)을 클릭하면 다음 범위의 첫 번째 페이지를 보여줍니다.
      (ex. 1~5 페이지가 보여지는 상황에서 버튼 클릭 시 6~10이 보이고 6페이지로 이동)
- [x] 이전 범위가 존재하지 않는다면 이전 범위 버튼(<)은 disabled 되어야 합니다.
- [x] 다음 범위가 존재하지 않는다면 다음 범위 버튼(>)은 disabled 되어야 합니다.
- [x] 현재 선택된 페이지는 클릭되지 않도록 합니다.
- [x] 존재하지 않는 페이지에 접근 시 에러 처리를 합니다.

## 3) 상품 상세 (`/products/{id}`)

- [x] 상품 상세 조회 API를 이용해서 id에 해당하는 상품을 보여주세요.
- [x] 상품 가격은 세 자리마다 콤마(,)로 구분해주세요.
- [x] 존재하지 않는 상품에 접근 시 에러 처리를 합니다.

# 추가 구현 사항 및 리팩터링 사항

### Loading시 Skeleton UI 및 Loading spinner 구현

- Loading 중 일 경우 화면에 변화가 없는 것 보다 좋은 사용자 경험을 제공하기 위해 Skeleton UI와 LoadingSpinner를 구현해 상황에 맞게 사용할 수 있도록 구현했습니다.
- 로그인시 LoadingSpinner 사용
- product, products fetching시 Skeleton UI 사용

### Header 분리

- 모든 페이지에서 사용하고 있는 header를 Header component로 분리하여 layout을 보다 쉽게 관리할 수 있도록 했습니다.

### AccessToken을 localStorage에 보관한 이유

- AccessToken의 expire 기간이 정해지지 않았기 때문에 정보가 비휘발되는 localStorage를 통해 AccessToken, userName을 보관할 수 있도록 구현했습니다.
- 만약 expire 기간이 정해진다면, cookie를 사용해 expire 기간을 설정해 AccessToken을 보관하고 expire 기간이 종료 되면 자동으로 로그아웃 될 수 있도록 구현을 할 것 같습니다.

### Error 처리

#### 1. queries의 useErrorBoundary를 true로 설정해 useQuery 사용시 발생하는 error를 errorBoundary에서 처리할 수 있도록 구현했습니다.

- 이렇게 구현한 이유는 exception error와 product, products를 fetching 하는 과정에 발생하는 error를 errorBoundary로 응집시켜 처리할 수 있겠다는 생각을 했기 때문입니다.
- 또한 errorBoundary에서 errorMessage로 분기 처리해 에러가 발생할 경우 fallback UI를 제공함으로써 사용자에게는 보다 좋은 경험을 개발자는 error 처리를 보다 간편하게 처리할 수 있지 않을까? 라는 생각을 했기 때문입니다.

#### 2. mutation시 발생하는 에러를 ErrorBoundary에서 fallback UI를 사용하는게 아닌 snackbar를 이용해 사용자에게 메시지를 전달할 수 있도록 구현했습니다.

- 이렇게 구현한 이유는 mutation시 발생하는 에러의 경우 fallback UI를 제공하는 것 보다는 현재 보여지는 페이지에서 사용자에게 메시지를 간편하게 전달하는게 사용자 경험 측면에서 더 좋다는 생각을 했습니다.
- 또한 mutation시 에러 뿐만 아니라 성공했을 경우 역시 사용자에게 메시지를 전달하는 것이 사용자 경험 측면에서 더 좋다는 생각이 들어 mutation의 onError, onSuccess에서 snackbar message를 전달하여 사용자에게 요청한 상태를 사용자에게 전달할 수 있도록 구현했습니다.

### ValueOf, StrictPropsWithChildren 유틸 타입 생성

#### 1. ValueOf 유틸 타입을 생성한 이유

- 타입스크립트의 유틸 타입에는 keyof는 존재하지만 valueof는 존재하지 않아 객체의 value값을 type으로 만들어 줄 수 있는 ValueOf 유틸 타입을 생성해 객체의 값을 쉽게 타입으로 변환할 수 있도록 구현했습니다.

```ts
export type ValueOf<T> = T[keyof T];
```

#### 2. StrickPropsWithChildren 유틸 타입을 생성한 이유

- React에서 기본으로 제공해주는 유틸 타입인 PropsWithChildren의 children 타입이 optional이기 때문에 보다 안전하게 children을 받을 수 있도록 StrictPropsWithChildren 유틸 타입을 생성해 사용했습니다.

```ts
// 리액트에서 제공해주는 util type
type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

// 새롭게 만든 util type
type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};
```
