import { useQuery } from 'react-query';

import { getProductDetail } from '../../api/products';
import { QUERY_KEY } from '../../constants/key';
import { ProductDetailResponse } from '../../types/product';

type UseGetProductDetailParams = {
  id: number;
};

const useGetProductDetail = ({ id }: UseGetProductDetailParams) => {
  return useQuery<ProductDetailResponse>([QUERY_KEY.GET_PRODUCT_DETAIL, id], getProductDetail(id));
};

export default useGetProductDetail;
