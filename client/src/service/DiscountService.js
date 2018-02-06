// @flow
import type { Discounts } from '../types/pricingRule';
import type { Orders } from '../types/order';
import type { Product } from '../types/product';

export default class DiscountService {
  discounts: Discounts;
  orders: Orders;
  product: Product;
  discount: number = 0;

  constructor(discounts: Discounts, orders: Orders = []) {
    this.discounts = discounts;
    this.orders = orders;
  }

  add(product: Product) {
    this.product = product;

    this.orders = [].concat(this.orders, product);
    this.apply(product.id);
  }

  apply(productId: string): void {
    const amount = this.orders.filter(order => order.id === productId).length;

    const discount = this.discounts.find(
      discount => discount.productId === productId
    );

    if (discount) {
      const { unit, repeatEach, value } = discount;

      if (
        (unit === amount && repeatEach !== 1) ||
        (unit === repeatEach && amount % repeatEach === 0) ||
        (repeatEach === 1 && amount > unit)
      ) {
        this.discount += value;
        return;
      }

      if (unit === amount && repeatEach === 1) {
        this.discount += value * amount;
        return;
      }
    }

    this.discount += 0;
    return;
  }

  getDiscount(): number {
    return this.discount;
  }
}
