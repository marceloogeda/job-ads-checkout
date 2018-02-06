// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
`;

export type CardProps = {
  children: Node
};

export default ({ children }: CardProps) => <Card>{children}</Card>;
