// @flow
import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

// Image
import logo from './gdp.png';

// Theme
import { colors } from './../../theme/palette';

// Style
const Header = styled.header`
  background-color: #fff;
  border-bottom: 9px solid ${colors.blue};
  display: flex;
  padding: 1.25rem 1rem;
  width: 100%;
`;

export default () => (
  <Header>
    <Grid>
      <Row>
        <Col lg={10}>
          <img src={logo} alt="global delivery pod" width={110} />
        </Col>
      </Row>
    </Grid>
  </Header>
);
