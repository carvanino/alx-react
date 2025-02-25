import React from "react";
import { shallow } from "enzyme";
import '../../config/setupTest';
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";

describe('<CourseListRow />', () => {

    it('should check what is rendered when the prop isHeader is true & textSecondCell is null', () => {

        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'Hello'} />);
        wrapper.setProps({ textSecondCell: '' });
        // console.log(wrapper.debug({ verbose: true }));
        expect(wrapper.html()).toBe("<tr><th colSpan=\"2\">Hello</th></tr>");

        wrapper.setProps({ textSecondCell: 'Present' });
        // console.log(wrapper.debug({verbose: true}));
        expect(wrapper.find('th')).toHaveLength(2);
        expect(wrapper.find('th').first().text()).toBe('Hello');
        expect(wrapper.find('th').last().text()).toBe('Present');


    });

    it('should check whatis rendered when the prop isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell={'Hello World'} />);
        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('td')).toHaveLength(2);
    });
});