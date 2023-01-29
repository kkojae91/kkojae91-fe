import React from 'react';

import ProductItemSkeleton from './ProductItemSkeleton';
import { Container } from '../ProductList';

const ProductListSkeleton = () => {
  return (
    <Container>
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index}>
          <ProductItemSkeleton />
        </li>
      ))}
    </Container>
  );
};

export default ProductListSkeleton;
