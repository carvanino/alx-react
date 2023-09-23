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
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li></li>');
    })

    it('should verify that the Notification comp contains teh correct text', () => {
        expect(wrapper.find('p').text()).toBe('Here is the list of Notifications');
    })
})