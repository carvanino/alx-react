import React from "react";
import '../../config/setupTest';
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

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

        expect(customWrapper.html()).toBe('<li><u>test</u></li>');
    });
})