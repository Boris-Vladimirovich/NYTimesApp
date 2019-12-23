import { createActions } from 'redux-actions';

export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST';
export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS';
export const SET_CURRENT           = 'SET_CURRENT';

export const {
    getNewsListRequest,
    getNewsListSuccess,
    setCurrent
} = createActions(
    GET_NEWS_LIST_REQUEST,
    GET_NEWS_LIST_SUCCESS,
    SET_CURRENT
);
