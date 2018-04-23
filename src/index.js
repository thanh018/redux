import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//store
import {createStore} from 'redux';
import reducer from './reducers/index';
import {Provider} from 'react-redux';
const store = createStore(reducer);

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
