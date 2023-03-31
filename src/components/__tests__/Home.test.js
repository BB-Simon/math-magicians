import TestRenderer from 'react-test-renderer';
import Home from '../Home';

describe('Jest Snapshot testing suite', () => {
  it('renders correctly', () => {
    const domTree = TestRenderer.create(<Home />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
