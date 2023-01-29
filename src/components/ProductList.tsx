import styled from 'styled-components';

import { Product } from '../types/product';
import ProductItem from './ProductItem';

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => (
  <Container>
    {products.map((product) => (
      <li key={product.id}>
        <ProductItem product={product} />
      </li>
    ))}
  </Container>
);

export default ProductList;

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-left: -20px;
`;
