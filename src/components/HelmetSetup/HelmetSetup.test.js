import renderer from 'react-test-renderer';
import HelmetSetup from './HelmetSetup';

describe('HelmetSetup', () => {
  const props = {
    title: 'Title'
  };
  it('receives `title` as prop', () => {
    // test spec
    const pageTitle = renderer.create(<HelmetSetup {...props} />).toJSON();
    expect(pageTitle).toMatchSnapshot();
  });
});
