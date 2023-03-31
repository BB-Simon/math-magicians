import TestRenderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Jest Snapshot testing suite', () => {
  it('renders correctly', () => {
    const domTree = TestRenderer.create(<Calculator />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
