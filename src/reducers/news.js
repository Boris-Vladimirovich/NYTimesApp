import produce                                from 'immer';

import { GET_NEWS_LIST_SUCCESS, SET_CURRENT } from '../actions/news';

const initialState = {
    list    : {},
    current : {},
    meta    : {
        totalCount : 0
    }
};

export default function bookings(state = initialState, action) {
    const { type, payload } = action;

    return produce(state, draft => {
        switch (type) {
            case GET_NEWS_LIST_SUCCESS:
                if (payload.isLazy) {
                    payload.list.forEach(item => {
                        draft.list[item.id] = item;
                    });
                } else {
                    const list = {};

                    payload.list.forEach(item => {
                        list[item.id] = item;
                    });

                    draft.list = list;
                }
                break;
            case SET_CURRENT:
                draft.current = payload;
                break;
            default:
                return state;
        }
    });
}
