import { Linking } from 'react-native';

export function openURL(url) {
    if (Linking.canOpenURL(url)) {
        Linking.openURL(url);
    } else {
        console.log('Wrong url: ', url);
    }
}
