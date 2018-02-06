import DiscountService from './DiscountService';

describe('# DiscountService', () => {
  it('Default customer gets 2 Classic Ads', () => {
    const discountService = new DiscountService([], []);

    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'classic', price: 269.99 });

    expect(discountService.getDiscount()).toEqual(0);
  });

  it('Unilever customer gets 3 Classic Ads', () => {
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

    expect(discountService.getDiscount()).toEqual(269.99);
  });

  it('Apple customer get 1 Standout Ad', () => {
    const discounts = [
      {
        productId: 'standout',
        repeatEach: 1,
        unit: 1,
        value: 23
      }
    ];

    const discountService = new DiscountService(discounts, []);

    discountService.add({ id: 'standout', price: 322.99 });

    expect(discountService.getDiscount()).toEqual(23);
  });

  it('Nike customer gets 4 Premium Ads', () => {
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

    expect(discountService.getDiscount()).toEqual(60);
  });

  it('Ford customer gets 5 Classic Ads', () => {
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

    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'classic', price: 269.99 });
    discountService.add({ id: 'classic', price: 269.99 });

    expect(discountService.getDiscount()).toEqual(269.99);
  });
});
