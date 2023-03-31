import TestRenderer from 'react-test-renderer';
import * as React from 'react';
import Quote from '../Quote';

describe('Jest Snapshot testing suite', () => {
  it('renders correctly', () => {
    const domTree = TestRenderer.create(<Quote />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
