import { fetcher } from '.';
import { Products } from '../types/product';

type GetProducts = (page: number) => () => Promise<Products>;

export const getProducts: GetProducts = (page) => async () => {
  const { data } = await fetcher.get<Products>('/products', {
    params: {
      page,
    },
  });

  return data;
};
