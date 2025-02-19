import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import App from './App';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

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
    it('should render without crashing', () => {
        expect(wrapper.find(Login).exists()).toBe(true);
    });
    it('should render without crashing', () => {
        expect(wrapper.find(Footer).exists()).toBe(true);
    });
});