import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from './rootReducer';
import Root from './containers/Root';
import './sass/main.scss';

const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, promise, logger, routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

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
