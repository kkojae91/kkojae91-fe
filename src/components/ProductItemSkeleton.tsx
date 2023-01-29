import React from 'react';
import styled, { keyframes } from 'styled-components';

const ProductItemSkeleton = () => {
  return (
    <Container>
      <ThumbnailSkeleton />
      <NameSkeleton />
      <PriceSkeleton />
    </Container>
  );
};

export default ProductItemSkeleton;

const refresh = keyframes`
  0% {
    background-color: rgba(242, 243, 247, 1);
  }
  50% {
    background-color: rgba(242, 243, 247, 0.5);
  }
  100% {
    background-color: rgba(242, 243, 247, 1);
  }
`;

const Container = styled.section`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
`;

const ThumbnailSkeleton = styled.div`
  width: 100%;
  height: 180px;

  animation: ${refresh} 1.2s infinite ease-out;
`;

const NameSkeleton = styled.div`
  margin-top: 8px;
  font-size: 16px;
  width: 70%;
  height: 19.5px;

  animation: ${refresh} 1.2s infinite ease-out;
`;

const PriceSkeleton = styled.div`
  width: 40%;
  height: 19.5px;
  margin-top: 4px;

  animation: ${refresh} 1.2s infinite ease-out;
`;
