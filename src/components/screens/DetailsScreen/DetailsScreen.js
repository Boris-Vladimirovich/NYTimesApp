import React, { PureComponent } from 'react';
import { View }                 from 'react-native';
import { connect }              from 'react-redux';
import PropTypes                from 'prop-types';
import { ScrollView }           from 'react-native-gesture-handler';

import Text                     from '../../UI-kit/Text';
import Image                    from '../../UI-kit/Image';
import Icon                     from '../../UI-kit/Icon';
import Button                   from '../../UI-kit/Button';

import { openURL }              from '../../../utils/linkingUtils';
import { formatDate }           from '../../../utils/formatUtils';

import styles                   from './DetailsScreenStyles';

class DetailsScreen extends PureComponent {
    static propTypes = {
        current : PropTypes.object.isRequired
    }

    static navigationOptions = ({ navigation }) => ({
        title : navigation.getParam('title', 'Post')
    });

    handleOpen = () => {
        const { url } = this.props.current;

        openURL(url);
    }

    render() {
        const { img, title, abstract, views, byline, published_date } = this.props.current;

        return (
            <ScrollView style={styles.container}>
                <Image
                    source           = {{ uri: img }}
                    containerStyle   = {styles.image}
                    placeholderStyle = {styles.image}
                />
                <View style = {styles.contenContainer}>
                    <Text style = {styles.title} >
                        {title}
                    </Text>
                    <View style={styles.metaContainer}>
                        <View style={styles.metaRow}>
                            <Icon
                                name = 'calendar'
                                type = 'material-community'
                            />
                            <Text style = {styles.date} >
                                {formatDate(published_date, 'MMMM D YYYY')}
                            </Text>
                        </View>
                        <View style={styles.metaRow}>
                            <Icon
                                name = 'eye'
                                type = 'material-community'
                            />
                            <Text style = {styles.views} >
                                {`${views} views`}
                            </Text>
                        </View>
                    </View>
                    <Text style = {styles.abstract} >
                        {abstract}
                    </Text>
                    <Text style = {styles.author} >
                        {byline}
                    </Text>
                    <Button
                        title   = 'Open in browser'
                        onPress = {this.handleOpen}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default connect(
    state => ({
        current : state.news.current
    })
)(DetailsScreen);
