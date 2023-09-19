import { shallow, mount, render } from 'enzyme';
import './setupTest';
import App from './App';

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should verify that a div with the class App-Header is rendered', () => {
        expect(wrapper.find('.App-header').exists()).toBe(true);
    });

    it('should verify that a div with the class App-Body is rendered', () => {
        expect(wrapper.find('.App-body').exists()).toBe(true);
    });

    it('should verify that a div with the class App-Footer is rendered', () => {
        expect(wrapper.find('.App-footer').exists()).toBe(true);
    });
});