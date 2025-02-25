import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import Login from './Login';
// const App = require('./App');

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that 2 input and 2 label tags is rendered', () => {
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});