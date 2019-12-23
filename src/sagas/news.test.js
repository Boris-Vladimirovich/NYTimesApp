import { runSaga }      from 'redux-saga';
import api              from '../apiSingleton';

import {
    getNewsListSuccess
}                       from '../actions/news';

import DUMPED_LIST_MOCK from '../fixtures/DUMPED_LIST_MOCK.json';

import { getNewsList }  from './news';

jest.mock('../api/Viewed.js');

describe('News saga', () => {
    it('should call api and dispatch success action', async () => {
        const getList = jest.spyOn(api.viewed, 'getList');
        const dispatched = [];

        await runSaga({
            dispatch : (action) => dispatched.push(action)
        }, getNewsList, { payload: {} });

        expect(getList).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([ getNewsListSuccess(DUMPED_LIST_MOCK) ]);
        getList.mockClear();
    });
});
