import React from 'react';
import TestRenderer from 'react-test-renderer';

import Button from './Button';

describe('# Button', () => {
  it('should render correctly', () => {
    const testRenderer = TestRenderer.create(<Button>Click here</Button>);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
