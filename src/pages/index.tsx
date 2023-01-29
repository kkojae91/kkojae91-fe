import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import ProductListSkeleton from '../components/ProductListSkeleton';
import ExceptionError from '../components/ExceptionError';
import useGetProducts from '../hooks/queries/useGetProducts';
import { PATHS } from '../constants/path';
import { ERROR_MESSAGES, REDIRECT_TEXT } from '../constants/message';

const HomePage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const { data, isError, isLoading } = useGetProducts({ page: Number(page ?? 1) });

  const products = data?.data.products;
  const totalCount = data?.data.totalCount;

  if (isError) {
    return (
      <ExceptionError
        title={ERROR_MESSAGES.NOT_FOUND_PAGE}
        description={REDIRECT_TEXT.TO_HOME}
        buttonText='홈으로 가기'
        path={PATHS.HOME}
      />
    );
  }

  return (
    <Container>
      {isLoading && <ProductListSkeleton />}

      <ProductList products={products ?? []} />
      <Pagination
        currentPage={Number(page ?? 1)}
        totalPageCount={Math.ceil(Number(totalCount ?? 1) / 10)}
      />
    </Container>
  );
};

export default HomePage;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
