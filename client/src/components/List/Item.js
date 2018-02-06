// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

// Theme
import { colors } from './../../theme/palette';

// Styles
const Item = styled.li`
  border-top: ${props => (props.bordered ? `5px solid ${colors.gray}` : '0')};
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

export type ItemProps = {
  bordered?: boolean,
  children: Node
};

export default ({ bordered, children }: ItemProps) => (
  <Item bordered={bordered}>{children}</Item>
);
