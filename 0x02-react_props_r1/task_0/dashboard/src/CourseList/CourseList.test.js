import React from 'react';
import '../../config/setupTest';

import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseList />);
  });

  it('should test that the <CourseList /> renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render 5 rows', () => {
    wrapper.setProps({listCourses: []});
    expect(wrapper.find('CourseListRow')).toHaveLength(2);
  });
})