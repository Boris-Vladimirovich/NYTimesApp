import 'react-native';
import React       from 'react';
import { shallow } from 'enzyme';

import Image       from './Image';

describe('Image component', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Image />
        );

        expect(component.length).toBe(1);
    });
});
