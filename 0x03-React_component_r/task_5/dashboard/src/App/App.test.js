/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import App from './App';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
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
    it('should render without crashing', () => {
        expect(wrapper.find(Notifications).exists()).toBe(true);
    });
    it('should render without crashing', () => {
        expect(wrapper.find(Header).exists()).toBe(true);
    });
    // it('should render without crashing', () => {
    //     expect(wrapper.find(Login).exists()).toBe(true);
    // });
    it('should render without crashing', () => {
        expect(wrapper.find(Footer).exists()).toBe(true);
    });

    it('Should check that an alert and logOut function is triggered when a user press the ctrl+h key', () => {
        // window.alert = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
        // the mockImplementation mocks the effect of the alert function to an empty function
        const mockLogOut = jest.fn();
        wrapper.setProps({ logOut: mockLogOut })

        const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
        window.dispatchEvent(event);

        expect(alertMock).toHaveBeenCalledWith('Logging you out');
        expect(mockLogOut).toHaveBeenCalled();

        alertMock.mockRestore()

        // const mockFun = jest.spyOn(App.prototype, "handlePressDown");
        // const result = mockFun();
        // expect(result).toHaveBeenCalledWith(alert('Logging you out'));
    });

    describe('Test Props in Comp', () => {
        const wrapper = shallow(<App />);

        it('Should check if CourseList is displayed', () => {
            wrapper.setProps({ isLoggedIn: false });
            expect(wrapper.find(CourseList).exists()).toBe(false);
        });

        it('Shoudld check what is rendered when isLoggedIn is present', () => {
            wrapper.setProps({ isLoggedIn: true });
            expect(wrapper.find(Login).exists()).toBe(false);
            expect(wrapper.find(CourseList).exists()).toBe(true);
        });
    });
});