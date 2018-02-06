// @flow
import React, { type Node, Component } from 'react';
import styled from 'styled-components';

// Components
import Item from './Item';

// Styles
const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export type ListProps = {
  items: any,
  footer: {},
  renderItem: () => Node
};

export default class extends Component<ListProps> {
  static Item = Item;
  static defaultProps = {
    items: []
  };

  render() {
    const { items, footer, renderItem } = this.props;

    return (
      <List>
        {!!renderItem
          ? renderItem()
          : items.map((item: any, index: number) => (
              <Item key={index}>{item}</Item>
            ))}
        {!!footer && footer}
      </List>
    );
  }
}
