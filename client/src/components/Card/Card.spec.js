import React from 'react';
import TestRenderer from 'react-test-renderer';

import Card from './Card';

describe('# Card', () => {
  it('should render correctly', () => {
    const testRenderer = TestRenderer.create(<Card />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
