// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Heading from './Heading';
import Paragraph from './Paragraph';

// Types
import type { Node } from 'react';

// Styles
const TextElement = styled.span`
  font-size: ${props => (!!props.large ? '1.45rem' : '1rem')};
  text-decoration: ${props => (!!props.lineThrough ? 'line-through' : 'none')};
`;

export type TextProps = {
  children: Node,
  large?: boolean,
  lineThrough?: boolean
};

export default class Text extends Component<TextProps> {
  static Heading = Heading;
  static Paragraph = Paragraph;

  render() {
    const { children, large, lineThrough } = this.props;

    return (
      <TextElement large={large} lineThrough={lineThrough}>
        {children}
      </TextElement>
    );
  }
}
