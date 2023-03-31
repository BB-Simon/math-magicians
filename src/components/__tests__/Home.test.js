import TestRenderer from 'react-test-renderer';
import Home from '../Home';

// const testRenderer = TestRenderer.create(<Home />);
// const testInstance = testRenderer.root;

describe('Jest Snapshot testing suite', () => {
  it('renders correctly', () => {
    const domTree = TestRenderer.create(<Home />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
