import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import useGetProducts from '../hooks/queries/useGetProducts';
import ProductListSkeleton from '../components/ProductListSkeleton';
import ExceptionError from '../components/ExceptionError';
import { PATHS } from '../constants/path';

const HomePage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const { data, isError, isLoading } = useGetProducts({ page: Number(page ?? 1) });

  const products = data?.data.products;
  const totalCount = data?.data.totalCount;

  if (isError) {
    return (
      <ExceptionError
        title='존재하지 않는 페이지입니다.'
        description='홈으로 돌아가시려면 아래 버튼을 클릭해주세요.'
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
