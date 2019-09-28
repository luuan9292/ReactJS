import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
