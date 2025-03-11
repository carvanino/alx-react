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
        console.log(wrapper.debug({ verbose: true }));
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
        expect(wrapper.find('Notifications').exists()).toBe(false);
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
    });

    it('should check that the component only rerenders when the length of listNotification changes', () => {
        const newNotification = [
            {
                id: 3,
                value: "New Job available",
                type: "default"
            },
            {
                id: 4,
                value: "New allowance available",
                type: "urgent"
            }
        ]
        const recentNotifications = [
            ...newNotification,
            {
                id: 5,
                value: "Most recent notification",
                type: "urgent"
            }
        ]
        console.log(wrapper.find(NotificationItem).last());
        wrapper.setProps({ displayDrawer: true, listNotifications: newNotification });
        // Here we have set the props for listNotification to newNotification and the first item in listNotifcation has now changed
        // But we're checking with the previous item just to be clear that the item did not actually re-render
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type=\"default\">New course available</li>');
        wrapper.setProps({ listNotifications: recentNotifications });
        console.log(wrapper.find(NotificationItem).last());
        expect(wrapper.find(NotificationItem).last().html()).toBe('<li data-notification-type=\"urgent\">Most recent notification</li>');
    })
})