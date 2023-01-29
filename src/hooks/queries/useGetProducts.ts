import { useQuery } from 'react-query';

import { getProducts } from '../../api/products';
import { Products } from '../../types/product';

type UseGetProductsParams = {
  page: number;
};

const useGetProducts = ({ page }: UseGetProductsParams) => {
  return useQuery<Products>(['getProducts', page], getProducts(page));
};

export default useGetProducts;
