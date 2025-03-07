import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import Login from './Login';
// const App = require('./App');

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />).dive();
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that 2 input and 2 label tags is rendered', () => {
        expect(wrapper.find('input')).toHaveLength(3);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});

describe('<App/> state', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />).dive();
    });

    it('should verify that the button is disabled by default', () => {
        console.log(wrapper.find('input').debug());
        const submitButton = wrapper.find('input').filterWhere((node) => node.prop('disabled'));
        console.log(submitButton.prop('disabled'));
        expect(submitButton.prop('disabled')).toEqual(true);
    });

    it('shodul verify that after changing the value of the two input the button is enabled', () => {
        const emailInput = wrapper.find('input').filterWhere((node) => node.prop('id') === 'email');
        const passwordInput = wrapper.find('input').filterWhere((node) => node.prop('id') === 'password');
        emailInput.simulate('change', {target: {value: 'akinol@gmail.com'}})
        passwordInput.simulate('change', {target: {value: 'password'}})
        const submitButton = wrapper.find('input').filterWhere((node) => node.prop('type') === 'submit');
        expect(submitButton.prop('disabled')).toEqual(false);
    })

})