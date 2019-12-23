import 'react-native';
import React       from 'react';
import { shallow } from 'enzyme';

import Button      from './Button';

describe('Button component', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Button />
        );

        expect(component.length).toBe(1);
    });

    it('should call onPress', () => {
        const onPress = jest.fn();

        const component = shallow(<Button onPress = {onPress} />);

        component
            .props()
            .onPress();

        expect(onPress).toHaveBeenCalled();
    });
});
