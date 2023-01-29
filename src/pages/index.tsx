import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import ProductList from '../components/ProductList';
import Pagination from '../components/common/Pagination';
import ProductListSkeleton from '../components/loading/ProductListSkeleton';
import useGetProducts from '../hooks/queries/useGetProducts';
import { COUNT } from '../constants';

const HomePage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const { data, isLoading } = useGetProducts({ page: Number(page ?? 1) });

  const products = data?.data.products;
  const totalCount = data?.data.totalCount;

  return (
    <Container>
      {isLoading && <ProductListSkeleton />}

      <ProductList products={products ?? []} />
      <Pagination
        currentPage={Number(page ?? 1)}
        totalPageCount={Math.ceil(Number(totalCount ?? 1) / COUNT.DEFAULT_PRODUCT_COUNT)}
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
