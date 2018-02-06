// @flow
import React from 'react';
import { connect } from 'react-redux';

// Actions
import fetchProductsIfNeeded from './../../actions/product';
import fetchPricingRuleIfNeeded from './../../actions/pricingRule';

// Components
import ProductList from './../../components/Product/ProductList';

// Types
import type { Dispatch, State } from './../../types/';
import type { ProductsObject } from './../../types/product';
import type { PricingRuleObject } from './../../types/pricingRule';

export type Props = {
  products: ProductsObject,
  pricingRule: PricingRuleObject,
  dispatch: Dispatch
};

const mapStateToProps = (state: State) => {
  const { pricingRule, products } = state;

  return {
    pricingRule,
    products
  };
};

class ProductContainer extends React.Component<Props> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchProductsIfNeeded());
    dispatch(fetchPricingRuleIfNeeded());
  }

  render() {
    const { pricingRule, products } = this.props;

    return (
      <ProductList data={products.payload} pricingRule={pricingRule.payload} />
    );
  }
}

export default connect(mapStateToProps)(ProductContainer);
