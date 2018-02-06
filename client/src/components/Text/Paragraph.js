// @flow
import React from 'react';
import styled from 'styled-components';

// Styles
const Paragraph = styled.p`
  font-size: 16px;
`;

export type ParagraphProps = {
  children: Node | string
};

export default ({ children }: ParagraphProps) => (
  <Paragraph>{children}</Paragraph>
);
