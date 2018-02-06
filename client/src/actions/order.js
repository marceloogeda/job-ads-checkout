import * as types from './../constants/ActionTypes';
import DiscountService from './../service/DiscountService';

export const addProduct = product => {
  return (dispatch, getState) => {
    const { pricingRule, orders } = getState();
    const discounts =
      'discounts' in pricingRule.payload ? pricingRule.payload.discounts : [];

    const discountService = new DiscountService(discounts, orders);
    discountService.add(product);

    let item = Object.assign({}, product);
    item.price -= discountService.getDiscount();

    dispatch(addItem(item));
  };
};

export const addItem = item => ({
  type: types.ADD_ITEM,
  item: Object.assign({}, item, { key: new Date().getTime() })
});

export const removeItem = key => ({
  type: types.REMOVE_ITEM,
  key
});
