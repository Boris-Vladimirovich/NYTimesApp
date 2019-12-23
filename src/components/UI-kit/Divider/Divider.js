import React, { PureComponent } from 'react';
import { Divider }              from 'react-native-elements';

export default class CustomDivider extends PureComponent {
    render() {
        return (
            <Divider {...this.props} />
        );
    }
}
