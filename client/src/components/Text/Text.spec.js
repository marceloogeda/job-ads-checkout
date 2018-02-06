import React from 'react';
import TestRenderer from 'react-test-renderer';

import Text from './Text';

describe('# Text', () => {
  it('should render a HTMLSpanElement correctly', () => {
    const testRenderer = TestRenderer.create(<Text>Seek - Job Ads</Text>);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('should render a HTMLParagraphElement correctly', () => {
    const testRenderer = TestRenderer.create(
      <Text.Paragraph>Seek - Job Ads</Text.Paragraph>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('should render a HTMLHeadingElement correctly', () => {
    const testRenderer = TestRenderer.create(
      <Text.Heading>Seek - Job Ads</Text.Heading>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
