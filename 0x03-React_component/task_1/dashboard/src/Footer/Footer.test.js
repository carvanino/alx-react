import React from "react";
import Footer from './Footer';
import { shallow } from 'enzyme';
import '../../config/setupTest';

describe('<Footer />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('should verify that the component renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
})