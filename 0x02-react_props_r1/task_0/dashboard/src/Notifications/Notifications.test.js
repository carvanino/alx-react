import React from "react";
import '../../config/setupTest';
import Notifications from './Notifications';
// const Notifications = require('./Notifications');

import { shallow } from 'enzyme';

describe('<Notifications />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer />);
    });

    it('should test that the Notification component renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the Notifications renders three list items', () => {
        wrapper.setProps({listNotifications: []});
        expect(wrapper.find('NotificationItem')).toHaveLength(0);
    })

    it ('should verify that the first Notification Item renders teh right html', () => {
        wrapper.setProps({listNotifications: [{id: 1, type: 'default', value: 'New course available'}]})
        expect(wrapper.find('NotificationItem').first().html()).toBe('<li data-notification-type=\"default\">New course available</li>');
    })

    it('should verify that the Notification comp contains the correct text', () => {
        wrapper.setProps({listNotifications: []});
        expect(wrapper.find('p').at(1).text()).toBe('No new notification for now');
    });

    it('should verify that div.Notifications is displayed when props displayDrawer is true', () => {
        expect(wrapper.find('div').first().hasClass('menuItem')).toBe(true);
        expect(wrapper.find('div').at(1).hasClass('Notifications')).toBe(true);

        wrapper.setProps({displayDrawer: false});
        expect(wrapper.find('div.Notifications').exists()).toBe(false);

    });
})