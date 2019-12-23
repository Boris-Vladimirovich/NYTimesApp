import { call, put, all, takeLatest } from 'redux-saga/effects';

import api                            from '../apiSingleton';

import {
    GET_NEWS_LIST_REQUEST,
    getNewsListSuccess
}                                     from '../actions/news';

import { dumpNews }                   from '../utils/dumpUtils';

export function* getNewsList({ payload: { isLazy, period = 1, query, onSuccess, onError, onFinally } }) {
    try {
        const res = yield call(api.viewed.getList.bind(api.viewed), period, query);

        const dumped = dumpNews(res);

        yield put(getNewsListSuccess({ ...dumped, isLazy }));

        if (onSuccess) onSuccess(res);
    } catch (error) {
        console.log('Get news error', error);
        if (onError) onError(error);
    } finally {
        if (onFinally) onFinally();
    }
}

export default function* watchNews() {
    yield all([
        takeLatest(GET_NEWS_LIST_REQUEST, getNewsList)
    ]);
}
