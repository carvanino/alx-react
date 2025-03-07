import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';
import { configure } from 'enzyme';

StyleSheetTestUtils.suppressStyleInjection();

configure({ adapter: new Adapter() });