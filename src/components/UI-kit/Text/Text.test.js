import 'react-native';
import React       from 'react';
import { shallow } from 'enzyme';

import Text        from './Text';

describe('Text component', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Text />
        );

        expect(component.length).toBe(1);
    });
});
