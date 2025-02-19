import React from "react";
import '../../config/setupTest';
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe('<BodySectionWIthMarginBottom', () => {
    it('Should render correctly with BodySection and appropriate props', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="Testing"><p>Test content</p></BodySectionWithMarginBottom>);
        expect(wrapper.find(BodySection).exists()).toBe(true);
        const bodySectionProps = wrapper.find(BodySection).props();
        // console.log(bodySectionProps);
        expect(bodySectionProps.title).toEqual('Testing');
        expect(bodySectionProps.children).toEqual(<p>Test content</p>);

        /* Method 2 */

        expect(wrapper.containsMatchingElement(BodySection));
        expect(wrapper.children().prop('title')).toEqual('Testing');
        // console.log(wrapper.children().props().children);

        // Line 23 & 24 does the same thing 
        expect(wrapper.children().props().children).toEqual(<p>Test content</p>);
        expect(wrapper.children().prop('children').props.children).toEqual('Test content');
        // expect(wrapper.children().prop('Children')).toEqual('Testing');
    });
});