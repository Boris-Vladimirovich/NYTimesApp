import { StyleSheet } from 'react-native';
import colors         from '../../../constants/colors';

export default StyleSheet.create({
    container : {
        flex           : 1,
        justifyContent : 'center'
    },
    divider : {
        marginHorizontal : 40
    },
    footer : {
        height         : 100,
        width          : '100%',
        alignItems     : 'center',
        justifyContent : 'center'
    },
    empty : {
        color      : colors.TEXT_SECONDARY,
        fontSize   : 20,
        fontWeight : '100',
        textAlign  : 'center',
        marginTop  : 100
    }
});
