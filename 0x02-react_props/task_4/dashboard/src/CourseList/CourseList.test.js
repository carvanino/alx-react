import React from "react";
import { shallow } from "enzyme";
import '../../config/setupTest';
import CourseList from "./CourseList";

describe('<CourseList />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    });

    it('should check that the component renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should check thet the component renders 5 different rows', () => {
        // console.log(wrapper.debug({verbose: true}));
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
})