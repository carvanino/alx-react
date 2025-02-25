import React from "react";
import { shallow, mount } from "enzyme";
import '../../config/setupTest';
import NotificationItem from "./NotificationItem";

describe('<NotificationItem />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NotificationItem type={'default'} value={'test'} />)
    })

    it('should verify that the components renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the correct html with a dummy prop value for type', () => {
        // expect(wrapper.contains(<NotificationItem type={'default'} />).renders())
        expect(wrapper.prop("data-notification-type")).toEqual('default');
    });

    it('should render the correct html with a dummy prop value for value', () => {
        expect(wrapper.text()).toBe('test');
    });

    // it('should render the correct html with a dummy prop value for html', () => {
    //     // expect(wrapper)
    //     const customWrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
    //     console.log(customWrapper.debug({ verbose: true }));
    //     expect(customWrapper.find('u').exists()).toBe(true);
    // });

    it('should render the correct html with a dummy prop value for html', () => {
        const customWrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        const renderedHTML = customWrapper.html();
        const expectedHTML = '<li data-notification-type=\"default\"><u>test</u></li>';
        expect(renderedHTML).toEqual(expectedHTML);
    });
});