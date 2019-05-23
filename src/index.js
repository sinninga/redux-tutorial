import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './reducers/products_reducer';
import userReducer from './reducers/user_reducer';


const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  allReducers,
  {
    products: [{
      name: 'iPhone',
      price: 'expensive'
  }],
    user: 'Mike'
  },
  allStoreEnhancers
);


ReactDOM.render(<Provider store={store}><App aRandomProps='whatever'/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
