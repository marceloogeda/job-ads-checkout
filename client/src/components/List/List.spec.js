import React from 'react';
import TestRenderer from 'react-test-renderer';

import List from './List';

describe('# List', () => {
  it('should render correctly', () => {
    const testRenderer = TestRenderer.create(<List items={[1, 2, 3, 4, 5]} />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('should render a empty list', () => {
    const testRenderer = TestRenderer.create(<List />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
