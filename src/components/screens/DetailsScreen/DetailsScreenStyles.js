import { StyleSheet } from 'react-native';

import colors         from '../../../constants/colors';

export default StyleSheet.create({
    container : {
        flex : 1
    },
    contenContainer : {
        padding : 20
    },
    metaContainer : {
        flexDirection : 'column',
        marginBottom  : 20
    },
    metaRow : {
        flex           : 1,
        flexDirection  : 'row',
        justifyContent : 'flex-start',
        alignItems     : 'center'
    },
    image : {
        height : 293
    },
    title : {
        textAlign    : 'justify',
        fontSize     : 24,
        fontWeight   : '600',
        marginBottom : 20
    },
    abstract : {
        textAlign    : 'justify',
        fontSize     : 18,
        marginBottom : 20
    },
    date : {
        marginLeft : 10,
        textAlign  : 'right',
        fontStyle  : 'italic',
        color      : colors.TEXT_SECONDARY
    },
    views : {
        marginLeft : 10,
        textAlign  : 'right',
        color      : colors.TEXT_SECONDARY
    },
    author : {
        paddingLeft  : 100,
        textAlign    : 'right',
        color        : colors.TEXT_SECONDARY,
        marginBottom : 20
    }
});
