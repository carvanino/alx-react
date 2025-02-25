import React from 'react';
import '../../config/setupTest';
import {shallow} from 'enzyme';
import CourseListRow from './CourseListRow';

describe ('<CourseListRow />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseListRow />);
  });

  it('should test that the <CourseListRow /> renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should check that when isHeader is true the component renders correctly', () => {
    wrapper.setProps({isHeader: true});
    expect(wrapper.find('th').prop('colSpan')).toBe(2);

    wrapper.setProps({textSecondCell: 'Second Cell'});
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('should chech that when isHeader is false the component renderes correctly', () => {
    wrapper.setProps({isHeader: false});
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').first().parent().is('tr')).toBe(true);
  });

})