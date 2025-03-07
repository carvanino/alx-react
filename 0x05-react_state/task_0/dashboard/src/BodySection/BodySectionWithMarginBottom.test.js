import React from 'react';
import {shallow} from 'enzyme';
import '../../config/setupTest';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = shallow(
      <BodySectionWithMarginBottom title='test title'>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
  });

  it('should test that the component renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should test that the component renders the title and children correctly', () => {
    expect(wrapper.find('BodySection').exists()).toBe(true);
    expect(wrapper.find('BodySection').prop('title')).toEqual('test title');
    expect(wrapper.find('BodySection').prop('children')).toEqual(<p>test children node</p>);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
})