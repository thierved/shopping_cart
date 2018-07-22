import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import ReduxPromise from 'redux-promise';

import App from './components/App';
import reducers from './reducers';

//const store = applyMiddleware(ReduxPromise)(createStore);
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));
