import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware             from 'redux-saga';

import reducers                         from '../reducers';
import sagas                            from '../sagas';

function bindMiddleware(middleware) {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');

        return composeWithDevTools(applyMiddleware(...middleware));
    }

    return applyMiddleware(...middleware);
}

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducers,
        initialState,
        bindMiddleware([ sagaMiddleware ])
    );

    store.sagaTask = sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
