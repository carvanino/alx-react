import React from "react";
import { shallow } from "enzyme";
import '../../config/setupTest';
import BodySection from "./BodySection";

describe('<BodySection />', () => {
    it('Should check that the component renders correctly with an h2 and the', () => {
        const wrapper = shallow(<BodySection title="test title"><p>test children node </p></BodySection>);
        // console.log(wrapper.debug({ verbose: true }));
        // console.log(wrapper.children().debug({ verbose: true }));
        expect(wrapper.find('h2').text()).toEqual('test title');
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.children().containsMatchingElement(<p>test children node</p>)).toBe(true);
        expect(wrapper.children().find('p')).toHaveLength(1);
    });
});