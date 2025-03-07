import React from "react";
import '../../config/setupTest';
import Notifications from './Notifications';
// const Notifications = require('./Notifications');

import { shallow, mount } from 'enzyme';

const closeIcon = require("../assets/close-icon.png");

jest.mock("../assets/close-icon.png", () => 'mocked-image-path');


describe('<Notifications />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer />).dive();
    });

    it('should test that the Notification component renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the Notifications renders three list items', () => {
        wrapper.setProps({listNotifications: []});
        expect(wrapper.find('NotificationItem')).toHaveLength(0);
    })

    it ('should verify that the first Notification Item renders the right html', () => {
        wrapper.setProps({listNotifications: [{id: 1, type: 'default', value: 'New course available'}]})
        expect(wrapper.find('NotificationItem')).toHaveLength(1);
    })

    it('should verify that the Notification comp contains the correct text', () => {
        wrapper.setProps({listNotifications: []});
        expect(wrapper.find('p').at(1).text()).toBe('No new notification for now');
    });

    it('should verify that div.Notifications is displayed when props displayDrawer is true', () => {
        // expect(wrapper.find('div').first().hasClass('menuItem')).toBe(true);
        wrapper.setProps({displayDrawer: false});
        expect(wrapper.find('div').first().props().className).toContain('menuItem');
        // using props() to get the className of the first div because of aphrodite
        // expect(wrapper.find('div').at(1).hasClass('Notifications')).toBe(true);
        wrapper.setProps({displayDrawer: true});
        // console.log(wrapper.html());
        expect(wrapper.find('div').at(1).prop('className')).toContain('Notifications');

        expect(wrapper.find('div.Notifications').exists()).toBe(false);
    });

    it('should check if the component rerenderes when updating the props', () => {
        const listNotifications = [
            {id: 1, type: 'default', value: 'New course available'},
            {id: 2, type: 'urgent', value: 'New resume available'},
            {id: 3, type: 'urgent', html: {__html: '<u>test</u>'}}
        ];

        const newNotification = {id: 4, type: 'default', value: 'test'};

        wrapper.setProps({listNotifications});
        expect(wrapper.find('NotificationItem')).toHaveLength(3);

        wrapper.setProps({listNotifications: [...listNotifications, newNotification]});
        expect(wrapper.find('NotificationItem')).toHaveLength(4);
    })
})

describe('<Notification /> state', () => {
    let wrapper;
    let handleDisplayDrawer;
    let handleHideDrawer;

    beforeEach(() => {
        handleDisplayDrawer = jest.fn();
        handleHideDrawer = jest.fn();

        wrapper = mount(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} displayDrawer={false}/>);
    });

    it('should verify that clicking on the menu item calls handleDisplayDrawer', () => {
        wrapper.setProps({handleDisplayDrawer});
        const menuItemvar = wrapper.findWhere(
            (node) =>
              node.type() === 'div' &&
              node.prop('className')?.includes('menuItem')
          )/* .simulate('click'); */
          menuItemvar.simulate('click');
          
        expect(handleDisplayDrawer).toHaveBeenCalled();
    })

    it('should verify that clicking on the button calls handleHideDrawer', () => {
        wrapper.setProps({ displayDrawer: true });
        const button = wrapper.find('button');

        button.simulate('click');
        expect(handleHideDrawer).toHaveBeenCalled()
    });
})