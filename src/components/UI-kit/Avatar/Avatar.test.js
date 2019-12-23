import 'react-native';
import React       from 'react';
import { shallow } from 'enzyme';

import Avatar      from './Avatar';

describe('Avatar component', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Avatar />
        );

        expect(component.length).toBe(1);
    });

    it('should be rounded by default', () => {
        const component = shallow(
            <Avatar />
        );

        expect(component.props().rounded).toBe(true);
    });

    it('should has default size 20', () => {
        const component = shallow(
            <Avatar />
        );

        expect(component.props().size).toBe(20);
    });
});
