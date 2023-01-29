export type Product = {
  id: string;
  name: string;
  thumbnail: string | null;
  price: number;
};

export type ProductsResponse = {
  data: { products: Product[]; totalCount: number };
};

export type ProductDetailResponse = {
  data: {
    product: Product;
  };
};
