import { combineReducers } from 'redux';

import orders from './orders';
import pricingRule from './pricingRule';
import products from './products';

const rootReducer = combineReducers({
  orders,
  pricingRule,
  products
});

export default rootReducer;
