import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';

function productsReducer(state = [], action) {
  if (action.type === 'changeState') {
    return action.payload.newState;
  }
  return 'State';
}
const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
