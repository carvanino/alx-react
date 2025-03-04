/** @jest-environment jsdom */
import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import App from './App';

jest.mock('../assets/holberton-logo.jpg', () => 'mocked-logo');

describe('<App props/>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that a div with the class App-Header is rendered', () => {
        expect(wrapper.find('.App-header').exists()).toBe(true);
        expect(wrapper.find('Header').exists()).toBe(true);
    });

    it('should verify that a div with the class App-Body is rendered', () => {
        wrapper.setProps({isLoggedIn: false});
        expect(wrapper.find('.App-body').exists()).toBe(true);
        expect(wrapper.find('Login').exists()).toBe(true);
    });

    it('should verify that a div with the class App-Footer is rendered', () => {
        expect(wrapper.find('Footer').exists()).toBe(true);
    });

    it('should verify the mainContent based on the isLoggedIn props', () => {
        wrapper.setProps({isLoggedIn: true});
        expect(wrapper.find('CourseList').exists()).toBe(true);
        expect(wrapper.find('Login').exists()).toBe(false);
    });
});

describe('<App components/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('should verify that the keys control and h are pressed and the logOut func is called and alert function is called with the right string', () => {
        const mockLogOut = jest.fn();
        wrapper.setProps({ logOut: mockLogOut})
        const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

        const keypress = new KeyboardEvent('keydown', {key: 'h', ctrlKey: true});
        dispatchEvent(keypress);
        

        expect(mockAlert).toHaveBeenCalled();
        expect(mockAlert).toBeCalledWith('Logging you out');
        expect(mockLogOut).toHaveBeenCalled();
    })
});