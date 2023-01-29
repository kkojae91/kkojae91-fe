import { useQuery } from 'react-query';

import { getProductDetail } from '../../api/products';
import { ProductDetailResponse } from '../../types/product';

type UseGetProductDetailParams = {
  id: number;
};

const useGetProductDetail = ({ id }: UseGetProductDetailParams) => {
  return useQuery<ProductDetailResponse>(['getProductDetail', id], getProductDetail(id));
};

export default useGetProductDetail;
