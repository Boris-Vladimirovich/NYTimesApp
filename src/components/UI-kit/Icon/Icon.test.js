import 'react-native';
import React       from 'react';
import { shallow } from 'enzyme';

import colors      from '../../../constants/colors';

import Icon        from './Icon';

describe('Icon component', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Icon />
        );

        expect(component.length).toBe(1);
    });
    it('should has default color', () => {
        const component = shallow(
            <Icon />
        );

        expect(component.props().color).toBe(colors.TEXT_SECONDARY);
    });
});
