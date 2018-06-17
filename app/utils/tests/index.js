import testRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

export function testSnapshot(component, shallow = true) {
    let tree;
    if (shallow) {
        const renderer = new ShallowRenderer();
        renderer.render(component);
        tree = renderer.getRenderOutput();
    } else {
        tree = testRenderer.create(component).toJSON();
    }
    expect(tree).toMatchSnapshot();
}
