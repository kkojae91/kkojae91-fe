import React from 'react';
import styled from 'styled-components';

import { skeletonAnimation } from '../../styles/animation';

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

const Container = styled.section`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
`;

const ThumbnailSkeleton = styled.div`
  width: 100%;
  height: 180px;

  ${skeletonAnimation}
`;

const NameSkeleton = styled.div`
  margin-top: 8px;
  font-size: 16px;
  width: 70%;
  height: 19.5px;

  ${skeletonAnimation}
`;

const PriceSkeleton = styled.div`
  width: 40%;
  height: 19.5px;
  margin-top: 4px;

  ${skeletonAnimation}
`;
