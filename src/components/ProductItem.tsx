import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Product } from '../types/product';

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product: { name, thumbnail, price, id } }: ProductItemProps) => {
  const router = useRouter();

  const handleMoveProductDetailPage = () => {
    router.push(`/products/${id}`);
  };

  return (
    <Container role='button' onClick={handleMoveProductDetailPage}>
      <Thumbnail src={thumbnail ? thumbnail : '/defaultThumbnail.jpg'} />
      <Name>{name}</Name>
      <Price>{price.toLocaleString('ko-KR')}원</Price>
    </Container>
  );
};

export default ProductItem;

const Container = styled.section`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
`;

const Name = styled.h2`
  margin-top: 8px;
  font-size: 16px;
`;

const Price = styled.p`
  margin-top: 4px;
`;
