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
        expect(wrapper.find(NotificationItem).exists()).toBe(true);
    });

    it('should verify that the Notification comp contains teh correct text', () => {
        expect(wrapper.find('p').text()).toBe('Here is the list of Notifications');
    });

    it('Should verify that the first NotificationItem renders the right html', () => {
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type=\"urgent\">New Course Available</li>');
    });
})