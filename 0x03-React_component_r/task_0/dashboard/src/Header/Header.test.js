import React from 'react';
import Header from './Header'
import { shallow } from 'enzyme'
import '../../config/setupTest';

describe('<Header />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('Should verify Header component rendens', () => {
        expect(wrapper.exists()).toBe(true)

    });

    it('Should verify that the img and h1 tags are rendered in the component', () => {
        // exists: checks whether or not a node exist in a wrapper; returns a boolean
        expect(wrapper.exists('img')).toEqual(true);
        // find: Finds every node in wrapper that matches selector; returns a wrapper that wraps the found nodes.
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});