import { all, call } from 'redux-saga/effects';

import watchNews     from './news';

export default function* rootSaga() {
    yield all([
        call(watchNews)
    ]);
}
