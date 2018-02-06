// @flow
export type Order = {
  description: string,
  id: string,
  name: string,
  price: number,
  key: number
};

export type Orders = Array<Order>;

export type OrderState = {
  +orders: Orders
};

export type OrderAction =
  | { type: 'ADD_ITEM', item: Order }
  | { type: 'REMOVE_ITEM', +id: string };
