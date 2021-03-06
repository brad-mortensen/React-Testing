import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
	it.skip('matches snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();

    expect(snapshot).toMatchSnapshot();
	});
	it('should render a div with class component-app which holds Display an Panel component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div.component-app').length).toBe(1);
	});
	it('should be 0 by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
    });
    test('simulate click 8 button', () => {
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();
        const button =wrapper.find('Panel').dive().find('Button').at(5).dive().find('button');
        button.simulate('click');
        expect(instance.state.next).toBe("8");
        });
});
