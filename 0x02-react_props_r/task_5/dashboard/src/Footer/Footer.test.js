import React from "react";
import '../../config/setupTest';
import Footer from "./Footer";
import { shallow } from "enzyme";

describe('<Footer />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('should verify that the component Footer renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should veify tha tthe componenet renders the text copyright', () => {
        expect(wrapper.text('Copyright'));
    })
})