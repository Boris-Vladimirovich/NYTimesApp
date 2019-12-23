import { Alert } from 'react-native';

export function showDialog({ title = 'Dialog', msg }) {
    Alert.alert(title, msg);
}
