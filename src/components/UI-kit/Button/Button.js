import React, { PureComponent } from 'react';
import { Button }               from 'react-native-elements';
import PropTypes                from 'prop-types';

import styles                   from './ButtonStyles';

export default class CustomButton extends PureComponent {
    static propTypes = {
        style : PropTypes.oneOfType([ PropTypes.object, PropTypes.array ])
    }

    static defaultProps = {
        style : {}
    }

    render() {
        const {
            style,
            ...rest
        } = this.props;

        return (
            <Button
                buttonStyle = {[ style, styles.btn ]}
                {...rest}
            />
        );
    }
}
