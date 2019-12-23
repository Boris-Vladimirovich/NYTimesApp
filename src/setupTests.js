import 'react-native';
import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter       from 'enzyme-adapter-react-16';
import { JSDOM }     from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target)
    });
}

global.window = window;
// eslint-disable-next-line more/no-window
global.document = window.document;
global.navigator = {
    userAgent : 'node.js'
};
copyProps(window, global);

configure({ adapter: new Adapter() });
