//difference from dev only logger and devtools-extension
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {
  basicMiddleware,
  middlewaresToApply
} from './common';

import rootSaga from '../sagas/sagas';

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    ...middlewaresToApply,
    sagaMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    ...basicMiddleware,
    preloadedState,
    compose(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
