import React, { PureComponent } from 'react';
import { Avatar }               from 'react-native-elements';
import PropTypes                from 'prop-types';

export default class CustomAvatar extends PureComponent {
    static propTypes = {
        src  : PropTypes.string,
        size : PropTypes.number
    }

    static defaultProps = {
        src  : '',
        size : 20
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {
            src,
            size,
            ...rest
        } = this.props;

        return (
            <Avatar
                rounded
                size   = {size}
                {...(src && { source: { uri: src } })}
                {...rest}
            />
        );
    }
}
