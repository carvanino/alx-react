import React from "react";
import Login from './Login';
import {shallow} from 'enzyme';
import '../../config/setupTest';

describe('<Login />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login/>);
    });

    it('should verify that the component renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the component renders renders 2 input and label tags', () => {
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    })
})