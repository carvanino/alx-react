import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import App from './App';
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
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
        wrapper.setProps({ isLoggedIn: false })
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('should contain the Footer component', () => {
        expect(wrapper.find('Footer')).toHaveLength(1);
    });

    it('should check that the component CourseList is not displayed', () => {
        expect(wrapper.contains('CourseList')).toBe(false);
    });


    describe('The App Component with the prop isLoggedIn', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        it('should verify that the Login Component is not Included', () => {
            expect(wrapper.contains(<Login />)).toBe(false);
        });

        it('should verify that the CourseList component is included', () => {
            wrapper.setProps({isLoggedIn: true})
            expect(wrapper.find('CourseList')).toHaveLength(1);
        });
    });
});

