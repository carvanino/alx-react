import React from "react";
import Header from './Header';
import { shallow } from 'enzyme';
import '../../config/setupTest';

describe('<Header />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('should verify that the component renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the component renders img and h1 tags', () => {
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    })
})