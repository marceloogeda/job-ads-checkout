// @flow
import React, { type Node, Component } from 'react';
import styled from 'styled-components';

// Theme
import { colors } from './../../theme/palette';

// Helper
import { rgba } from './../../helpers/index';

const Button = styled.button`
  background-color: ${props =>
    props.focused ? rgba(colors.blue, 0.15) : 'transparent'};
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  cursor: pointer;
  font-size: 16px;
  padding: 10px 25px;
  outline: none;
  text-transform: uppercase;
`;

export type ButtonProps = {
  children: Node,
  onClick: Event => void,
  type: string
};

export type ButtonState = {
  focused: boolean
};

export default class extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);

    this.state = {
      focused: false
    };
  }

  _handleClick = (e: Event): void => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(e);
    }
  };

  _handleMouseEnter = (): void => {
    this.setState({ focused: true });
  };

  _handleMouseLeave = (): void => {
    this.setState({ focused: false });
  };

  render() {
    const { focused } = this.state;
    const { children, type } = this.props;
    const color = type ? colors.blue : colors.gray;

    return (
      <Button
        color={color}
        focused={focused}
        onClick={this._handleClick}
        onMouseLeave={this._handleMouseLeave}
        onMouseEnter={this._handleMouseEnter}
      >
        {children}
      </Button>
    );
  }
}
