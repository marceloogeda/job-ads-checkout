// @flow
export type Product = {
  description: string,
  id: string,
  name: string,
  price: number,
  key: number
};

export type Products = Array<Product>;

export type ProductsObject = {
  isFetching: boolean,
  payload: Products
};

export type ProductState = {
  +products: ProductsObject
};

export type ProductAction =
  | { type: 'FETCH_PRODUCTS_REQUEST' }
  | { type: 'FETCH_PRODUCTS_SUCCESS', +products: Products }
  | { type: 'FETCH_PRODUCTS_FAILURE' };
