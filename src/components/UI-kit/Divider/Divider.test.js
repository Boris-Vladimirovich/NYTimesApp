import 'react-native';
import React       from 'react';
import { shallow } from 'enzyme';

import Divider     from './Divider';

describe('Divider component', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Divider />
        );

        expect(component.length).toBe(1);
    });
});
