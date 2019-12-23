import React, { PureComponent } from 'react';

import { Text }                 from 'react-native-elements';

export default class CustomText extends PureComponent {
    render() {
        return <Text {...this.props} />;
    }
}
