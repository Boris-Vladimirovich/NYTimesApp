import React, { PureComponent } from 'react';
import { View }                 from 'react-native';
import PropTypes                from 'prop-types';
import { TouchableOpacity }     from 'react-native-gesture-handler';

import Text                     from '../Text';
import Avatar                   from '../Avatar';
import Icon                     from '../Icon';

import { formatDate }           from '../../../utils/formatUtils';

import styles                   from './CardStyles.js';

export default class Card extends PureComponent {
    static propTypes = {
        data    : PropTypes.object,
        onPress : PropTypes.func
    }

    static defaultProps = {
        data    : {},
        onPress : () => {}
    }

    constructor(props) {
        super(props);
    }

    handlePress = () => {
        const { onPress, data } = this.props;

        onPress(data);
    }

    render() {
        const { data } = this.props;
        const { title = '', byline, published_date, thumbnail } = data;

        return (
            <TouchableOpacity
                style   = {styles.container}
                onPress = {this.handlePress}
            >
                <Avatar
                    src   = {thumbnail}
                    size  = {50}
                    title = {title[0]}
                />
                <View style={styles.textContainer}>
                    <Text
                        style         = {styles.title}
                        numberOfLines = {2}
                    >
                        {title}
                    </Text>
                    <View style={styles.subtitleContainer}>
                        <Text
                            style         = {styles.author}
                            numberOfLines = {2}
                        >
                            {byline}
                        </Text>
                        <Text style={styles.date}>
                            {formatDate(published_date)}
                        </Text>
                    </View>
                </View>
                <Icon
                    name = 'keyboard-arrow-right'
                    size = {40}
                />
            </TouchableOpacity>
        );
    }
}
