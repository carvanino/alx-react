import React from "react";
import CourseList from "./CourseList";
import '../../config/setupTest';
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('<CourseList />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    });

    it('Should check that the component renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Should Check that the component renders 5 columns', () => {
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
})