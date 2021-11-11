import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import App from './components/App';
import reducers from './reducers';

const initialState = {
  items: []
};


const middlewares = applyMiddleware(logger);

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App /> 
  </Provider>, 
  document.querySelector('#root')
);