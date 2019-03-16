//  Startup point for client side application
// To use some functions like async await
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
