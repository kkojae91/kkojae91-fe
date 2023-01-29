import React from 'react';

import ProductItemSkeleton from './ProductItemSkeleton';
import { Container } from '../ProductList';
import { COUNT } from '../../constants';

const ProductListSkeleton = () => {
  return (
    <Container>
      {Array.from({ length: COUNT.DEFAULT_PRODUCT_COUNT }).map((_, index) => (
        <li key={index}>
          <ProductItemSkeleton />
        </li>
      ))}
    </Container>
  );
};

export default ProductListSkeleton;
