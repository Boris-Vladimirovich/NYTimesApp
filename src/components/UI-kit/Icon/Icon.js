import React, { PureComponent } from 'react';
import { Icon }                 from 'react-native-elements';

import colors                   from '../../../constants/colors';

export default class CustomIcon extends PureComponent {
    render() {
        return (
            <Icon
                color = {colors.TEXT_SECONDARY}
                {...this.props}
            />
        );
    }
}
