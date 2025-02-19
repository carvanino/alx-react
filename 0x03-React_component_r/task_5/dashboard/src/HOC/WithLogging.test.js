/**
 * @jest-environment jsdom
 */
import React from "react";
import '../../config/setupTest';
import withLogging from "./WithLogging";
import { mount, shallow } from "enzyme";
import Login from "../Login/Login";

describe('WithLogging()', () => {
    it('should make sure that the right text is logged at the console when HOC is mounted and unmounted with an html element', () => {
        const spyConsole = jest.spyOn(console, 'log');
        const TestComponent = () => <div>Test</div>;
        const WrappedComponent = withLogging(TestComponent);
        const wrapper = mount(<WrappedComponent />);
        expect(spyConsole).toHaveBeenCalledWith(`Component ${TestComponent.name} is mounted on componentDidMount()`);
        wrapper.unmount();
        expect(spyConsole).toHaveBeenCalledWith(`Component ${TestComponent.name} will unmount on componentWillUnmount()`);
        // const wrapper = shallow(<WrappedComponent />);

        spyConsole.mockRestore();
    });

    it('should make sure that the right text is logged at the console when HOC is mounted and unmounted with the Login Component', () => {
        const spyConsole = jest.spyOn(console, 'log');
        // const TestComponent = () => <div>Test</div>;
        const WrappedComponent = withLogging(Login);
        const wrapper = mount(<WrappedComponent />);
        expect(spyConsole).toHaveBeenCalledWith(`Component ${Login.name} is mounted on componentDidMount()`);
        wrapper.unmount();
        expect(spyConsole).toHaveBeenCalledWith(`Component ${Login.name} will unmount on componentWillUnmount()`);
        // const wrapper = shallow(<WrappedComponent />);
        spyConsole.mockRestore();
    });
});