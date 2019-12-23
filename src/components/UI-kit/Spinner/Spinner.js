import React, { PureComponent } from 'react';
import { ActivityIndicator }    from 'react-native';
import PropTypes                from 'prop-types';

import colors                   from '../../../constants/colors';

export default class Spinner extends PureComponent {
    static propTypes = {
        size  : PropTypes.number,
        color : PropTypes.string
    }

    static defaultProps = {
        size  : 30,
        color : colors.PRIMARY
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {
            size,
            color,
            ...rest
        } = this.props;

        return (
            <ActivityIndicator
                size  = {size}
                color = {color}
                {...rest}
            />
        );
    }
}
