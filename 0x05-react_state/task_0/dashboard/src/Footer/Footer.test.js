import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import Footer from './Footer';
import { getFooterCopy, getFullYear } from "../utils/utils";

describe('<Footer />', () => {  

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer user={ {isLoggedIn: true}}/>)            
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the component renders the text Copyright', () => {
        expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}Contact us`);
    });

    it('should verify that the component renders the text Contact us when the user is logged in', () => {
        expect(wrapper.find('p').at(1).text()).toEqual('Contact us');
    });

    it('should verify that the component does not render the text Contact us when the user is not logged in', () => {
        wrapper.setProps({user: {isLoggedIn: false}});
        expect(wrapper.find('p')).toHaveLength(1);
    });
});