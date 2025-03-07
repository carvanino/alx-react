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
        expect(wrapper.findWhere(node => node.is('div') && node.props().className?.includes('header')).exists()).toBe(true);
        expect(wrapper.find('Header').exists()).toBe(true);
    });

    it('should verify that a div with the class App-Body is rendered', () => {
        wrapper.setState({user: {isLoggedIn: false}});
        expect(wrapper.findWhere(node => node.is('div') && node.props().className?.includes('body')).exists()).toBe(true);
        expect(wrapper.find('withLogging(CourseList)').exists()).toBe(false);
    });

    it('should verify that a div with the class App-Footer is rendered', () => {
        expect(wrapper.find('Footer').exists()).toBe(true);
    });

    it('should verify the mainContent based on the isLoggedIn props', () => {
        wrapper.setState({user: {isLoggedIn: true}});
        expect(wrapper.find('withLogging(CourseList)').dive().find('CourseList').exists()).toBe(true);
        expect(wrapper.find('withLogging(Login)').exists()).toBe(false);
    });
});

describe('<App components/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('should verify that the keys control and h are pressed and the logOut func is called and alert function is called with the right string', () => {
        const mockLogOut = jest.fn();
        wrapper.setState({ logOut: mockLogOut})
        const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

        const keypress = new KeyboardEvent('keydown', {key: 'h', ctrlKey: true});
        dispatchEvent(keypress);
        

        expect(mockAlert).toHaveBeenCalled();
        expect(mockAlert).toBeCalledWith('Logging you out');
        expect(mockLogOut).toHaveBeenCalled();
    })
});

describe('<App state/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should verify that the state displayDrawer is false by default', () => {
        expect(wrapper.state().displayDrawer).toBe(false);
    });

    it('should verify that the state displayDrawer is true when calling handleDisplayDrawer', () => {
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state().displayDrawer).toBe(true);
    });

    it('should verify that the state displayDrawer is false when calling handleHideDrawer', () => {
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state().displayDrawer).toBe(false);
    });

    it('should verify that the logIn function updates the state correctly', () => {
        expect(wrapper.state().user.email).toBe('johndoe@gmail.com');
        const email = 'mock@email.com'
        const password = 'password';
        const logInSpy = jest.spyOn(wrapper.instance(), 'logIn');
        wrapper.instance().logIn(email, password);
        expect(logInSpy).toHaveBeenCalled();
        expect(wrapper.state().user.email).toBe(email);
    });

    it('should verify that the logOut function updates the state correctly', () => {
        const email = 'mock@email.com'
        const password = 'password';
        wrapper.instance().logIn(email, password);
        const logOutSpy = jest.spyOn(wrapper.instance(), 'logOut');
        wrapper.instance().logOut();
        expect(logOutSpy).toHaveBeenCalled();
        expect(wrapper.state().user.email).toBe('johndoe@gmail.com');
    });
});