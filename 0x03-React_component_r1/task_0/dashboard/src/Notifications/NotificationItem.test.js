import React from "react";
import {shallow} from "enzyme";
import '../../config/setupTest';
import NotificationItem from "./NotificationItem";

describe('<NotificationItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotificationItem/>);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render by passing a dummy type and value props', () => {
    wrapper.setProps({type: 'default', value: 'Does exist'});
    expect(wrapper.find('li').html()).toEqual("<li data-notification-type=\"default\">Does exist</li>")
  });

  it('should render when passed with a dummy html props', () => {
    wrapper.setProps({html: {__html: '<u>test</u>'}})
    console.log(wrapper.debug());
    expect(wrapper.html()).toContain('<u>test</u>')
  })
});

describe('<NotificationItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotificationItem />);
  });
  
  it ('should test that the spy on markAsRead is called with right id argument', () => {
    const markAsReadMock = jest.fn();

    wrapper.setProps({markAsRead: () => markAsReadMock(1)});
    wrapper.find('li').simulate('click');

    expect(markAsReadMock).toHaveBeenCalledWith(1);
  })
});