import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducer/index';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
