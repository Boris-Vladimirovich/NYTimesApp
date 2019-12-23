import moment from 'moment';

export default function formatDate(date, format = 'MMM D YYYY') {
    return moment(date).format(format);
}
