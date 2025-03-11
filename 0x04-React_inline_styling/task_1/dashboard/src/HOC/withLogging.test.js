import '../../config/setupTest';

import React from 'react';

import { shallow, unmount } from 'enzyme';

import withLogging from './withLogging';
import Login from '../Login/Login';

describe('withLogging', () => {
  let wrapper;
  let TestComponent, TestComponentWithLogging;
  let consoleSpy;

  beforeEach(() => {
    TestComponent = () => <p>test</p>;
    TestComponentWithLogging = withLogging(TestComponent);
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  })
  
  it('should log the component name to the console on mount with the corrct message', () => {
    wrapper = shallow(<TestComponentWithLogging />)
    expect(consoleSpy).toHaveBeenCalledWith('Component TestComponent is mounted');
  })

  it('should log the component name to the console on unmount with the correct message', () => {
    wrapper = shallow(<TestComponentWithLogging />);
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component TestComponent is going to unmount');
  });

  it('should log the component name to the console on mount when the wrapped element is Login', () => {
    const LoginWithLogging = Login; // because the component is already wrapped
    wrapper = shallow(<LoginWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  })
})