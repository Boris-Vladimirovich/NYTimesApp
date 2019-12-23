import React, { PureComponent } from 'react';
import { View, FlatList }       from 'react-native';
import { connect }              from 'react-redux';
import PropTypes                from 'prop-types';

import Card                     from '../../UI-kit/Card';
import Spinner                  from '../../UI-kit/Spinner';
import Divider                  from '../../UI-kit/Divider';
import Text                     from '../../UI-kit/Text';

import * as newsActions         from '../../../actions/news';

import { getNewsList }          from '../../../selectors/news';

import size                     from '../../../constants/size';
import screens                  from '../../../constants/screens';

import { showDialog }           from '../../../utils/alertUtils';
import { decodeError }          from '../../../utils/errorUtlis';

import styles                   from './NewsListScreenStyles';

class NewsListScreen extends PureComponent {
    static propTypes = {
        getNewsListRequest : PropTypes.func.isRequired,
        news               : PropTypes.array.isRequired,
        navigation         : PropTypes.object.isRequired,
        setCurrent         : PropTypes.func.isRequired
    }

    static navigationOptions = {
        title : 'News'
    }

    constructor(props) {
        super(props);

        this.page = 0;
        this.perPage = 20;
        this.isAllDataLoaded = false;

        this.state = {
            isLoading     : true,
            isLazyLoading : false,
            isRefresh     : false
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    handleEndReached = () => {
        if (this.isAllDataLoaded || this.state.isLazyLoading || this.state.isRefresh) return;
        this.page++;
        this.fetchData(this.page);
    }

    handleRefresh = () => {
        if (this.state.isLazyLoading) return;
        this.isAllDataLoaded = false;
        this.page = 0;
        this.fetchData();
    }

    handlePress = item => {
        const { setCurrent, navigation } = this.props;

        setCurrent(item);

        navigation.navigate(screens.DETAILS, { title: item.title });
    }

    getItemLayout = (data, index) => ({ length: size.CARD_HEIGHT, offset: size.CARD_HEIGHT * index, index })

    keyExtractor = item => `${item.id}`

    fetchData = (page = 0) => {
        const { getNewsListRequest } = this.props;
        const { perPage } = this;
        const isLazy = !!page;

        this.setState(isLazy ? { isLazyLoading: true } : { isRefresh: true });

        getNewsListRequest({
            isLazy,
            query : {
                offset : perPage * page
            },
            onSuccess : res => {
                if (res.results?.length < this.perPage) this.isAllDataLoaded = true;
            },
            onError : error => {
                if (page) this.page--;
                showDialog(decodeError(error));
            },
            onFinally : () => {
                this.setState({
                    isLoading     : false,
                    isLazyLoading : false,
                    isRefresh     : false
                });
            }
        });
    }

    renderItem = ({ item }) => {
        return (
            <Card data={item} onPress={this.handlePress} />
        );
    }

    renderFooter = () => {
        return this.state.isLazyLoading &&
            <View style={styles.footer}>
                <Spinner />
            </View>;
    }

    renderSeparator = () => <Divider style={styles.divider} />

    renderEmpty = () => <Text style={styles.empty}>No News</Text>

    render() {
        const { news } = this.props;
        const { isLoading, isRefresh } = this.state;

        return (
            <View style={styles.container}>
                {isLoading
                    ? <Spinner />
                    : (
                        <FlatList
                            data                   = {news}
                            renderItem             = {this.renderItem}
                            keyExtractor           = {this.keyExtractor}
                            ListFooterComponent    = {this.renderFooter}
                            onEndReached           = {this.handleEndReached}
                            getItemLayout          = {this.getItemLayout}
                            ListEmptyComponent     = {this.renderEmpty}
                            ItemSeparatorComponent = {this.renderSeparator}
                            onRefresh              = {this.handleRefresh}
                            refreshing             = {isRefresh}
                            removeClippedSubviews
                        />
                    )
                }
            </View>
        );
    }
}

export default connect(
    state => ({
        news : getNewsList(state)
    }),
    { ...newsActions }
)(NewsListScreen);
