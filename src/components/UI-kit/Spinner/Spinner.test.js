import 'react-native';
import React       from 'react';
import { shallow } from 'enzyme';

import colors      from '../../../constants/colors';

import Spinner     from './Spinner';

describe('Spinner component', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Spinner />
        );

        expect(component.length).toBe(1);
    });
    it('should has default color', () => {
        const component = shallow(
            <Spinner />
        );

        expect(component.props().color).toBe(colors.PRIMARY);
    });
    it('should has default size', () => {
        const component = shallow(
            <Spinner />
        );

        expect(component.props().size).toBe(30);
    });
});
