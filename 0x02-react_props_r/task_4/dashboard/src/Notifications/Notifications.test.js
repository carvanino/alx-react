import React from "react";
import '../../config/setupTest';
import Notifications from './Notifications';

// const Notifications = require('./Notifications');

import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

describe('<Notifications />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    it('should test that the Notification component renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the Notifications renders three list items through the NotificationItem component', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find(NotificationItem).exists()).toBe(true);
    });

    it('should verify that the Notification comp contains teh correct text', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find('p').last().text()).toBe('Here is the list of Notifications');
    });

    it('Should verify that the first NotificationItem renders the right html', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type=\"urgent\">New Course Available</li>');
    });

    it('Checks whats being displayed based off the prop displayDrawer', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find('.menuItem').exists()).toBe(true);
        expect(wrapper.find('.Notifications').exists()).toBe(true);
        wrapper.setProps({ displayDrawer: false });
        expect(wrapper.find('.menuItem').exists()).toBe(true);
        expect(wrapper.find('.Notifications').exists()).toBe(false);
    })
})