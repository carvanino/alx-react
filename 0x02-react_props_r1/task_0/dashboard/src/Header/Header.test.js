import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import Header from './Header';

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the img and h1 tag is rendered', () => {
        expect(wrapper.find('img').exists()).toBe(true);
        expect(wrapper.find('h1').exists()).toBe(true);
    });
});