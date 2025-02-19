import React from "react";
import CourseList from "./CourseList";
import '../../config/setupTest';
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('<CourseList />', () => {

    let wrapper;

    beforeEach(() => {
        const listCourses = [
            {
                id: 1,
                name: 'ES6',
                credit: 60
            },
            {
                id: 2,
                name: 'Webpack',
                credit: 20
            }
        ]
        wrapper = shallow(<CourseList listCourses={listCourses} />);

    });

    it('Should check that the component renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Should Check that the component renders 3 columns', () => {
        // console.log(wrapper.debug());
        expect(wrapper.find(CourseListRow)).toHaveLength(4);
    });

    it('Should check that the component renders correctly when listCourses is empty', () => {
        wrapper.setProps({ listCourses: [] });
        expect(wrapper.find(CourseListRow)).toHaveLength(3);
    });
})