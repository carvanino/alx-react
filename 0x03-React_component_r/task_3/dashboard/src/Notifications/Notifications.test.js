import React from "react";
import '../../config/setupTest';
import Notifications from './Notifications';
import PropTypes from "prop-types";

// const Notifications = require('./Notifications');

import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

describe('<Notifications />', () => {

    let wrapper;

    beforeEach(() => {
        const listNotifications = [
            {
                id: 1,
                value: "New course available",
                type: "default"
            },
            {
                id: 2,
                value: "New resume available",
                type: "urgent"
            },
        ]
        wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    });

    it('should test that the Notification component renders without crashing', () => {
        // console.log(wrapper.debug());
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the Notifications renders three list items through the NotificationItem component', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find(NotificationItem).exists()).toBe(true);
    });

    it('should verify that the Notification comp contains the correct text', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find('p').last().text()).toBe('Here is the list of Notifications');
    });

    it('Should verify that the first NotificationItem renders the right html', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type=\"default\">New course available</li>');
    });

    it('Checks whats being displayed based off the prop displayDrawer', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find('.menuItem').exists()).toBe(true);
        expect(wrapper.find('.Notifications').exists()).toBe(true);
        wrapper.setProps({ displayDrawer: false });
        expect(wrapper.find('.menuItem').exists()).toBe(true);
        expect(wrapper.find('.Notifications').exists()).toBe(false);
    });

    it('Checks what the component renders if listNotifications is empty', () => {
        wrapper.setProps({ listNotifications: [] });
        expect(wrapper.find(NotificationItem)).toHaveLength(1);
    })

    it('Should mock the console.log function and check what is logged whem markAsRead is triggered', () => {
        // console.log(wrapper.debug());
        console.log = jest.fn();
        const spyConsole = jest.spyOn(console, 'log')
        const mockMark = jest.spyOn(Notifications.prototype, 'markAsRead')
        wrapper.find(NotificationItem).last().renderProp('markAsRead')();
        // wrapper.find(NotificationItem).last().prop('markAsRead')();

        expect(spyConsole).toHaveBeenCalled()
        expect(spyConsole).toHaveBeenCalledWith('Notification 2 has been marked as read')

        spyConsole.mockRestore();
    })
})