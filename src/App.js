import React, { PureComponent } from 'react';
import { Provider }             from 'react-redux';
import 'react-native-gesture-handler';

import configureStore           from './store/configureStore';

import AppContainer from './components/navigation/AppContainer';

const store = configureStore();

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

export default App;
