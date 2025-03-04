import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import Footer from './Footer';
import { getFooterCopy, getFullYear } from "../utils/utils";

describe('<Footer />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the component renders the text Copyright', () => {
        expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });
});