/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount, shallow, render } from 'enzyme';
import '../../config/setupTest';
import App from './App';
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { expect, jest } from '@jest/globals';
// const App = require('./App');

describe('<App />', () => {

    let wrapper;
    jest.mock('./App.css', () => ({}))

    beforeEach(function () {
        this.jsdom = require('jsdom-global')()
    })

    afterEach(function () {
        this.jsdom()
    })

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
            wrapper.setProps({ isLoggedIn: true })
            // console.log(wrapper.debug({verbose: true}));
            expect(wrapper.find('CourseList')).toHaveLength(1);
        });
    });

    it('should verify that when the ctrl + h keys are pressed, the logout() passed as prop is called', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
        const mountComp = mount(<App logOut={logOutMock} />)

        // wrapper.setProps({logOut: logOutMock});
        // console.log(mountComp.debug({verbose: true}));
        // console.log(mountComp.debug({ verbose: true }))
        // console.log(window.alert.mock.instances)

        const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
        document.dispatchEvent(event);

        // mountComp.simulate('keyDown', { key: 'h', ctrlKey: true });
        // expect(window.alert).toHaveBeenCalledWith('Logging you out');

        // expect(logOutMock).toHaveBeenCalledWith('Logging you out');
        expect(logOutMock).toHaveBeenCalled();
        expect(alertMock).toHaveBeenCalledWith('Logging you out');

        mountComp.unmount()

        // expect(logOutMock).toHaveBeenCalledTimes(1);
    });
});

