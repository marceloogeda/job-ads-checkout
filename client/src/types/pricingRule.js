// @flow
export type Discount = {
  productId: string,
  repeatEach: number,
  value: number,
  unit: number
};

export type Discounts = Array<Discount>;

export type PricingRule = {
  id: string,
  customerId: string,
  discounts: Discounts
};

export type PricingRuleObject = {
  isFetching: boolean,
  payload: PricingRule
};

export type PricingRuleState = {
  +pricingRule: PricingRuleObject
};

export type PricingRuleAction =
  | { type: 'FETCH_PRICING_RULES_REQUEST' }
  | { type: 'FETCH_PRICING_RULES_SUCCESS', +pricingRule: PricingRule }
  | { type: 'FETCH_PRICING_RULES_FAILURE' };
