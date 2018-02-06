import React from 'react';
import TestRenderer from 'react-test-renderer';

import Header from './Header';

describe('# Header', () => {
  it('should render correctly', () => {
    const testRenderer = TestRenderer.create(<Header />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
