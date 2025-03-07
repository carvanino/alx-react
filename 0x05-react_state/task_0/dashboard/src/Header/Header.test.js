import React from "react";
import { shallow, mount, render } from 'enzyme';
import '../../config/setupTest';
import Header from './Header';
import AppContext from '../App/AppContext';

jest.mock('../assets/holberton-logo.jpg', () => 'mocke-logo-path');

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Header />,
            {context: {user: {email: '', isLoggedIn: false}, logOut: () => {}}}
        );
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that the img and h1 tag is rendered', () => {
        expect(wrapper.find('img').exists()).toBe(true);
        expect(wrapper.find('h1').exists()).toBe(true);
    });
});

describe('<App />', () => {
    
    let wrapper;
    const mockUser = { email: 'akinola@gmail.com', isLoggedIn: true };
    const mockLogOut = jest.fn();

    beforeEach(() => {
        wrapper = mount( // Use mount instead of shallow
            <AppContext.Provider value={{ user: mockUser, logOut: mockLogOut }}>
                <Header />
            </AppContext.Provider>
        );
    });

    it('should verify that the logOut section is created when user is LoggedIn', () => {
        console.log(wrapper.debug());
        expect(wrapper.find('section').exists()).toBe(true);
    });

    it('should verify that when the ogOut section is clicked, the logOut function is called', () => {
        wrapper.find('a').simulate('click');
        expect(mockLogOut).toHaveBeenCalled();
    });
})