import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

import setupMSW from '../api/setup';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Header from '../components/layout/Header';
import GlobalStyle from '../styles/GlobalStyle';

setupMSW();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
    mutations: {
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Background />

      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ErrorBoundary>
            <Content>
              <Header />
              <Component {...pageProps} />
            </Content>
          </ErrorBoundary>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
`;

export const Content = styled.div`
  width: 420px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;
