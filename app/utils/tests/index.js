import testRenderer from 'react-test-renderer';

export function testSnapshot(component) {
    const tree = testRenderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
}
