import { createSelector } from 'reselect';

function newsSelector(state) {
    return state.news.list;
}

export const getNewsList = createSelector(
    newsSelector,
    news => Object.values(news)
);
