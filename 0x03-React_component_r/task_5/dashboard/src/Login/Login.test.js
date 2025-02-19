import React from "react";
import Login from "./Login";
import '../../config/setupTest';
import { shallow } from "enzyme";

describe('<Login />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    it('Verify that the Login component renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Verify that the component renders 2 input tags and 2 label tags', () => {
        // Makes sense to use find here because we're checking that 2 input tags and label tags are rendered. We know how how many to check for

        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});