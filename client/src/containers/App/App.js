import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

// Components
import Header from './../../components/Header/Header';
import OrderList from './../../components/Order/OrderList';

// Containers
import ProductContainer from './../../containers/ProductContainer/ProductContainer';

// Theme
import { colors } from './../../theme/palette';

// Style
const Root = styled.div`
  background-color: ${colors.gray};
  width: 100%;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <Header />
        <Grid>
          <Row reverse>
            <Col xs={12} md={4}>
              <OrderList />
            </Col>
            <Col xs={12} md={8}>
              <ProductContainer />
            </Col>
          </Row>
        </Grid>
      </Root>
    );
  }
}

export default App;
