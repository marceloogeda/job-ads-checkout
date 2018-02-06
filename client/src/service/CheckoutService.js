// @flow
import type { Orders } from './../types/order';

export default class CheckoutService {
  orders: Orders;

  constructor(orders: Orders) {
    this.orders = orders;
  }

  getTotal = (): number => {
    return Number(
      this.orders
        .map(order => order.price)
        .reduce((prev, cur) => prev + cur, 0)
        .toFixed(2)
    );
  };
}
