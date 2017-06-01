import "babel-polyfill";
import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import Root from './containers/Root';
import './sass/main.scss';

const initialState = new Immutable.Map();

import configureStore from './store';
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
    <Root history={history} store={store} />
  </AppContainer>  ,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextApp = require('./containers/Root').default;

    render(
      <AppContainer>
        <NextApp history={history} store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
