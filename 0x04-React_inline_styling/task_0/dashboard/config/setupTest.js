import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();