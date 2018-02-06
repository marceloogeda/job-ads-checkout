import React, { Component } from 'react';
import styled from 'styled-components';
import MdClear from 'react-icons/lib/md/clear';
import { connect } from 'react-redux';
import _ from 'underscore';

// Actions
import { removeItem } from './../../actions/order';

// Components
import Card from './../Card/Card';
import List from './../List/List';
import Text from './../Text/Text';

// Service
import CheckoutService from './../../service/CheckoutService';

// Types
import type { Node } from 'react';
import type { Dispatch } from '../../types/';
import type { Orders } from './../../types/orders';

// Theme
import { colors } from './../../theme/palette';

type OrderListProps = {
  orders: Orders,
  handleOnClick: (key: number) => Dispatch
};

// Styles
const CloseButton = styled.span`
  background-color: ${colors.gray};
  color: #666;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 0.25rem;
  padding: 0.05rem;
`;

const mapStateToProps = state => {
  const { orders } = state;

  return {
    orders
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleOnClick: key => dispatch(removeItem(key))
});

class OrderList extends Component<OrderListProps> {
  renderOrderItem = (): Node => {
    const { handleOnClick, orders } = this.props;
    const ordersIds = _.groupBy(orders, 'id');

    return Object.entries(ordersIds).map(item => {
      const orders = item[1];
      const order = orders.find((n, i) => i === 0);
      const amount = orders.length;
      const checkoutService = new CheckoutService(orders);

      return (
        <List.Item key={order.key}>
          <Text>
            {amount} - {order.name}
            <CloseButton onClick={() => handleOnClick(order.key)}>
              <MdClear />
            </CloseButton>
          </Text>
          <Text>${checkoutService.getTotal()}</Text>
        </List.Item>
      );
    });
  };

  render() {
    const { orders } = this.props;
    const checkoutService = new CheckoutService(orders);

    return (
      <Card>
        <Text.Heading>Your order</Text.Heading>
        {orders.length === 0 ? (
          <Text>You have no orders</Text>
        ) : (
          <List
            items={orders}
            renderItem={() => this.renderOrderItem()}
            footer={
              <List.Item bordered>
                <Text>Total:</Text>
                <Text>${checkoutService.getTotal(orders)}</Text>
              </List.Item>
            }
          />
        )}
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
