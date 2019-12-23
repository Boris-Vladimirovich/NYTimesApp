import config         from '../etc/config';
import api            from './api';
import { showDialog } from './utils/alertUtils';

export default api({
    ...config,
    onConnectionError : () => showDialog({ title: 'Error', msg: 'No connection' })
});
