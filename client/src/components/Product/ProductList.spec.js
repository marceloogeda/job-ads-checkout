import React from 'react';
import TestRenderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import ProductList from './ProductList';

const setup = (setupProps: {}) => {
  const store = configureStore()();
  const renderer = TestRenderer.create(
    <ProductList store={store} data={setupProps.data} pricingRule={{}} />
  );

  return {
    store,
    renderer
  };
};

describe('# Product', () => {
  it('should render correctly', () => {
    const data = [{ id: 1, name: 'Product1', description: 'Lorem...' }];
    const { renderer } = setup({ data });

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
