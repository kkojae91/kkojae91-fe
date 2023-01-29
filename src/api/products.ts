import { fetcher } from '.';
import { ProductDetailResponse, ProductsResponse } from '../types/product';

type GetProducts = (page: number) => () => Promise<ProductsResponse>;

export const getProducts: GetProducts = (page) => async () => {
  const { data } = await fetcher.get<ProductsResponse>('/products', {
    params: {
      page,
    },
  });

  return data;
};

type GetProductDetail = (id: number) => () => Promise<ProductDetailResponse>;

export const getProductDetail: GetProductDetail = (id) => async () => {
  const { data } = await fetcher.get<ProductDetailResponse>(`/products/${id}`);

  return data;
};
