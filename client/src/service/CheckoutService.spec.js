import CheckoutService from './CheckoutService';
import DiscountService from './DiscountService';

describe('# CheckoutService', () => {
  it('Customer: Default | SKUs Scanned:  `classic`, `standout`, `premium`', () => {
    const discounts = [];

    const discountService = new DiscountService(discounts, []);

    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'standout', price: 322.99 });
    discountService.add({ id: 'premium', price: 394.99 });

    const checkoutService = new CheckoutService(discountService.orders);
    const total = checkoutService.getTotal() - discountService.getDiscount();

    expect(total).toEqual(987.97);
  });

  it('Customer: Unilever | SKUs Scanned:  `classic`, `classic`, `classic`, `premium`', () => {
    const discounts = [
      {
        productId: 'classic',
        repeatEach: 3,
        unit: 3,
        value: 269.99
      }
    ];

    const discountService = new DiscountService(discounts, []);

    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'premium', price: 394.99 });

    const checkoutService = new CheckoutService(discountService.orders);
    const total = checkoutService.getTotal() - discountService.getDiscount();

    expect(total).toEqual(934.97);
  });

  it('Customer: Apple | SKUs Scanned:  `standout`, `standout`, `standout`, `premium`', () => {
    const discounts = [
      {
        productId: 'standout',
        repeatEach: 1,
        unit: 1,
        value: 23
      }
    ];

    const discountService = new DiscountService(discounts, []);

    discountService.add({ id: 'premium', price: 394.99 });
    discountService.add({ id: 'standout', price: 322.99 });
    discountService.add({ id: 'standout', price: 322.99 });
    discountService.add({ id: 'standout', price: 322.99 });

    const checkoutService = new CheckoutService(discountService.orders);
    const total = checkoutService.getTotal() - discountService.getDiscount();

    expect(total).toEqual(1294.96);
  });

  it('Customer: Nike | SKUs Scanned:  `premium`, `premium`, `premium`, `premium` ', () => {
    const discounts = [
      {
        productId: 'premium',
        repeatEach: 1,
        unit: 4,
        value: 15
      }
    ];

    const discountService = new DiscountService(discounts, []);

    discountService.add({ id: 'premium', price: 394.99 });
    discountService.add({ id: 'premium', price: 394.99 });
    discountService.add({ id: 'premium', price: 394.99 });
    discountService.add({ id: 'premium', price: 394.99 });

    const checkoutService = new CheckoutService(discountService.orders);
    const total = checkoutService.getTotal() - discountService.getDiscount();

    expect(total).toEqual(1519.96);
  });

  it('Customer: Ford | SKUs Scanned: `premium`, `premium`, `premium`, `standout` , `standout` , `standout` , `classic` , classic` , `classic`', () => {
    const discounts = [
      {
        productId: 'classic',
        repeatEach: 5,
        unit: 5,
        value: 269.99
      },
      {
        productId: 'standout',
        repeatEach: 1,
        unit: 1,
        value: 13
      },
      {
        productId: 'premium',
        repeatEach: 1,
        unit: 3,
        value: 5
      }
    ];

    const discountService = new DiscountService(discounts, []);

    discountService.add({ id: 'premium', price: 394.99 });
    discountService.add({ id: 'premium', price: 394.99 });
    discountService.add({ id: 'premium', price: 394.99 });
    discountService.add({ id: 'standout', price: 322.99 });
    discountService.add({ id: 'standout', price: 322.99 });
    discountService.add({ id: 'standout', price: 322.99 });
    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'classic', price: 269.99 });

    const checkoutService = new CheckoutService(discountService.orders);
    const total = checkoutService.getTotal() - discountService.getDiscount();

    expect(total).toEqual(2909.91);
  });
});
