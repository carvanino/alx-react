import React from "react";
import '../../config/setupTest';
import PropTypes from 'prop-types';
import CourseListRow from "../CourseList/CourseListRow";
import { shallow } from "enzyme";


describe('<CourseListRow/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseListRow />);
    });

    it('Should test that the component renders one cell with colspan = 2 when textSecondCell is false', () => {
        wrapper.setProps({ isHeader: true, textFirstCell: "Hello" });
        // wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={Hello} />);
        expect(wrapper.html()).toBe("<tr><th colSpan=\"2\">Hello</th></tr>");

        wrapper.setProps({ textSecondCell: 'Present' });
        expect(wrapper.find('th')).toHaveLength(2);
    });

    it('Should test that the component renders 2 td element in a tr element', () => {
        wrapper.setProps({ isHeader: false, textFirstCell: "One", textSecondCell: "Two" });
        expect(wrapper.find('td')).toHaveLength(2);
        expect(wrapper.find('tr')).toHaveLength(1);
    });
})