import 'react-native';
import React       from 'react';
import { shallow } from 'enzyme';

import Card        from './Card';

describe('Card component', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Card />
        );

        expect(component.length).toBe(1);
    });

    it('should call onPress', () => {
        const onPress = jest.fn();

        const component = shallow(<Card onPress = {onPress} />);

        component
            .find('TouchableOpacity')
            .props()
            .onPress();

        expect(onPress).toHaveBeenCalled();
    });
});
