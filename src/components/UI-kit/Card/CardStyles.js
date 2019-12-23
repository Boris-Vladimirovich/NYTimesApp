import { StyleSheet }  from 'react-native';
import colors          from '../../../constants/colors';
import size            from '../../../constants/size';

export default StyleSheet.create({
    container : {
        flex           : 1,
        flexDirection  : 'row',
        justifyContent : 'space-between',
        alignItems     : 'center',
        padding        : 10,
        height         : size.CARD_HEIGHT
    },
    textContainer : {
        flex             : 1,
        marginHorizontal : 10
    },
    subtitleContainer : {
        flex           : 1,
        flexDirection  : 'row',
        justifyContent : 'space-between',
        alignItems     : 'flex-end'
    },
    title : {
        fontSize     : 16,
        fontWeight   : '600',
        marginBottom : 8,
        color        : colors.TEXT_PRIMARY
    },
    author : {
        flex        : 1,
        fontSize    : 10,
        fontWeight  : '100',
        color       : colors.TEXT_SECONDARY,
        marginRight : 20
    },
    date : {
        textAlign  : 'right',
        color      : colors.TEXT_SECONDARY,
        fontSize   : 10,
        fontWeight : '100',
        fontStyle  : 'italic'
    }
});
