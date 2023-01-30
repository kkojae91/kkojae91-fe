import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import ProductDetailSkeleton from '../../components/loading/ProductDetailSkeleton';
import useGetProductDetail from '../../hooks/queries/useGetProductDetail';

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useGetProductDetail({ id: Number(id ?? 1) });

  const product = data?.data.product;

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  return (
    <Container>
      <Thumbnail src={product?.thumbnail ? product.thumbnail : '/defaultThumbnail.jpg'} />

      <ProductInfoWrapper>
        <Name>{product?.name}</Name>
        <Price>{product?.price.toLocaleString('ko-KR')}원</Price>
      </ProductInfoWrapper>
    </Container>
  );
};

export default ProductDetailPage;

const Container = styled.article``;

const Thumbnail = styled.img`
  width: 100%;
  height: 420px;
`;

const ProductInfoWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Name = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 18px;
  margin-top: 8px;
`;
