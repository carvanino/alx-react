import React from "react";
import '../../config/setupTest';
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";

describe('<NotificationItem', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NotificationItem type="default" value="test" />);
    });

    it('Should verify that the component renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Should verify that passing dummy type and value props it renders the correct html', () => {
        // .props Returns the props object of the current node
        // .prop return the prop value for the root note with a provided key

        expect(wrapper.prop('data-notification-type')).toEqual('default');

        // .text() returns a string of the rendered text of a current render tree

        expect(wrapper.text()).toEqual('test');
    });

    it('Should verify that by passing a dummy html prop, it renders the correct html', () => {
        const customWrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);

        expect(customWrapper.html()).toBe('<li data-notification-type=\"default\"><u>test</u></li>');
    });

    it('Should simulates a click even and checks if the correct prop is called', () => {
        // console.log(wrapper.debug());
        const markAsReadSpy = jest.fn()
        wrapper.setProps({ markAsRead: () => markAsReadSpy(1) });
        wrapper.simulate('click');
        expect(markAsReadSpy).toHaveBeenCalledWith(1);

        markAsReadSpy.mockRestore();
    });
})