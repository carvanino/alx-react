import React from "react";
import { shallow } from "enzyme";
import '../../config/setupTest';
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe('<CourseList />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
        wrapper.setProps({ listCourses: [
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
        ]})
    });

    it('should check that the component renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should check that the component renders 5 different rows', () => {
        console.log(wrapper.debug({verbose: true}));
        expect(wrapper.find('CourseListRow')).toHaveLength(4);
    });

    it('should render correctly if the prop listCourses is empty', () => {
        wrapper.setProps({listCourses: []});
        console.log(wrapper.debug({verbose: true}))
        expect(wrapper.find('CourseListRow')).toHaveLength(3);
        expect(wrapper.find('CourseListRow').last().prop('textFirstCell')).toBe('No available courses');

    })
})