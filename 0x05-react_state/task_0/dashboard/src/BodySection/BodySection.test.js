import React from 'react';
import {shallow} from 'enzyme';
import BodySection from './BodySection';
import '../../config/setupTest';


describe('<BodySection />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
    <BodySection title='test title'>
      <p>test children node</p>
    </BodySection>
    );
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should check that the element are rendered correctly',() => {
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
})