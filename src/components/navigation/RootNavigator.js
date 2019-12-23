import { createStackNavigator } from 'react-navigation-stack';

import NewsListScreen           from '../screens/NewsListScreen';
import DetailsScreen            from '../screens/DetailsScreen';

import screens                  from '../../constants/screens';
import colors                   from '../../constants/colors';

const RootNavigator = createStackNavigator(
    {
        [screens.NEWS_LIST] : NewsListScreen,
        [screens.DETAILS]   : DetailsScreen
    }, {
        headerMode               : 'float',
        defaultNavigationOptions : {
            headerStyle : {
                backgroundColor : colors.PRIMARY
            },
            headerTintColor : colors.TEXT_CONTRAST
        }
    }
);

export default RootNavigator;
