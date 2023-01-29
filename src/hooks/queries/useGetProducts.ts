import { useQuery } from 'react-query';

import { getProducts } from '../../api/products';
import { QUERY_KEY } from '../../constants/key';
import { ProductsResponse } from '../../types/product';

type UseGetProductsParams = {
  page: number;
};

const useGetProducts = ({ page }: UseGetProductsParams) => {
  return useQuery<ProductsResponse>([QUERY_KEY.GET_PRODUCTS, page], getProducts(page));
};

export default useGetProducts;
