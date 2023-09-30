import React from "react";
import '../../config/setupTest';
import Notifications from './Notifications';
import NotificationItem from "./NotificationItem";
// const Notifications = require('./Notifications');

import { shallow } from 'enzyme';

describe('<Notifications />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    it('should test that the Notification component renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    // it('should verify that the Notifications renders three list items', () => {
    //     expect(wrapper.find('li')).toHaveLength(3);
    // });
    it('should verify that the first NotificationItem component renders the right html', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">New course available</li>');
    });

    it('should verify that the Notification comp contains the correct text', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find('p').last().text()).toBe('Here is the list of Notifications');
    });

    it('should verify that the div.Notifications is not being displayed when displayDrawer is false', () => {
        wrapper.setProps({ displayDrawer: false });
        expect(wrapper.find('div.menuItem')).toHaveLength(1);
        expect(wrapper.exists('.Notifications')).toBe(false);
    });

    it('should verify that the div.Notifications is being displayed when displayDrawer is true', () => {
        wrapper.setProps({ displayDrawer: true });
        expect(wrapper.find('div.menuItem')).toHaveLength(1);
        expect(wrapper.exists('.Notifications')).toBe(true);
    });
});