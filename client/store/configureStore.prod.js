import { createStore, applyMiddleware } from 'redux';
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
    createSagaMiddleware()
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    ...basicMiddleware,
    preloadedState,
    enhancers
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
