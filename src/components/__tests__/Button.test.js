import TestRenderer from 'react-test-renderer';
import Button from '../Button';

describe('Jest Snapshot testing suite', () => {
    it('renders correctly', () => {
    const title = "button";
    const click = () => {};
    const tree = TestRenderer.
    create(<Button onClick={click} type="button" className="button">{title}</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
