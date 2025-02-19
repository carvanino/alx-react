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

    it('Should check if CourseList is displayed', () => {
        wrapper.setProps({ isLoggedIn: false });
        expect(wrapper.find(CourseList).exists()).toBe(false);
    });

    describe('Test Props in Comp', () => {
        const wrapper = shallow(<App />);
        wrapper.setProps({ isLoggedIn: true });
        expect(wrapper.find(Login).exists()).toBe(false);
        expect(wrapper.find(CourseList).exists()).toBe(true);
    });
});