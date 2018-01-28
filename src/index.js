import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//store
import {createStore} from 'redux';
import myReducer from './tranning/reducers/index';
import todoApp from './tranning/reducers/reducers';
import { Provider } from 'react-redux';

const store = createStore(todoApp);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
