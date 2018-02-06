// @flow

import React from 'react';
import styled from 'styled-components';

// Styles
const Heading = styled.h1`
  font-size: 16px;
`;

export type HeadingProps = {
  children: Node | string
};

export default ({ children }: HeadingProps) => <Heading>{children}</Heading>;
