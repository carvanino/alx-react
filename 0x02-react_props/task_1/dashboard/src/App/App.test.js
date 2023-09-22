import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import App from './App';
// const App = require('./App');

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should contain the Notification component', () => {
        expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it('should contain the Header component', () => {
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('should contain the Login component', () => {
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('should contain the Footer component', () => {
        expect(wrapper.find('Footer')).toHaveLength(1);
    })
});