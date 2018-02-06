// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Actions
import { addProduct } from './../../actions/order';

// Components
import Button from './../Button/Button';
import Card from './../Card/Card';
import Text from './../Text/Text';

// Types
import type { State, Dispatch } from '../../types/';
import type { Orders } from '../../types/order';
import type { PricingRule } from '../../types/pricingRule';

export type ProductListProps = {
  data: Orders,
  pricingRule: PricingRule,
  dispatch: Dispatch
};

// Styles
const Price = styled.span`
  bottom: 20px;
  position: absolute;
  right: 20px;
`;

const PriceDetail = styled.span`
  font-size: 0.85rem;
`;

class ProductList extends Component<ProductListProps, State> {
  renderAdDiscount = (product, discount) => (
    <Price>
      <Text lineThrough>${product.price}</Text>
      <Text large>{` $${product.price * discount.unit - discount.value}`}</Text>
      <PriceDetail> / per ad</PriceDetail>
    </Price>
  );

  renderBatchAdDiscount = (product, discount) => (
    <Price>
      {discount.repeatEach === 1 ? (
        <span>
          <Text>
            {`Get ${discount.unit} or more from `}
            <Text lineThrough>${product.price}</Text>
            {` to `}
          </Text>
          <Text large>${product.price - discount.value}</Text>
          <PriceDetail> / per ad</PriceDetail>
        </span>
      ) : (
        <span>
          <Text>
            {`Get ${discount.unit} for `}
            <Text large>${product.price * discount.unit - discount.value}</Text>
          </Text>
          {` or `}
          <Text>${product.price}</Text>
          <PriceDetail> / per ad</PriceDetail>
        </span>
      )}
    </Price>
  );

  renderPrice(product) {
    const { pricingRule } = this.props;

    const productDiscount =
      'discounts' in pricingRule
        ? pricingRule.discounts.find(
            discount => discount.productId === product.id
          )
        : null;

    if (productDiscount && productDiscount.unit > 1) {
      return this.renderBatchAdDiscount(product, productDiscount);
    }

    if (productDiscount && productDiscount.unit === 1) {
      return this.renderAdDiscount(product, productDiscount);
    }

    return (
      <Price>
        <Text large>${product.price}</Text>
        <PriceDetail> / per ad</PriceDetail>
      </Price>
    );
  }

  render() {
    const { data, dispatch } = this.props;

    return data.map(product => {
      return (
        <Card key={product.id}>
          {this.renderPrice(product)}
          <Text.Heading>{product.name}</Text.Heading>
          <Text.Paragraph>{product.description}</Text.Paragraph>
          <Button type="primary" onClick={() => dispatch(addProduct(product))}>
            Add to order
          </Button>
        </Card>
      );
    });
  }
}

export default connect()(ProductList);
