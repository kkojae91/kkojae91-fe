import React from 'react';
import styled from 'styled-components';

import { skeletonAnimation } from '../styles/animation';

const ProductDetailSkeleton = () => {
  return (
    <Container>
      <ThumbnailSkeleton />

      <Wrapper>
        <NameSkeleton />
        <PriceSkeleton />
      </Wrapper>
    </Container>
  );
};

export default ProductDetailSkeleton;

const Container = styled.section``;

const ThumbnailSkeleton = styled.div`
  width: 100%;
  height: 420px;

  ${skeletonAnimation}
`;

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const NameSkeleton = styled.div`
  margin-top: 20px;
  width: 60%;
  height: 24px;

  ${skeletonAnimation}
`;

const PriceSkeleton = styled.div`
  width: 35%;
  height: 21.5px;
  margin-top: 8px;

  ${skeletonAnimation}
`;
