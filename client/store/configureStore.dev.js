//difference from prod only logger and devtools-extension
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import {
  basicMiddleware,
  middlewaresToApply
} from './common';

import rootSaga from '../sagas/sagas';

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();

  const middlewares = [
    ...middlewaresToApply,
    sagaMiddleware,
    logger
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    ...basicMiddleware,
    preloadedState,
    compose(
      ...enhancers,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
