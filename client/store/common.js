import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from '../rootReducer';

export const basicMiddleware = [
  rootReducer
];

export const middlewaresToApply = [
  thunk,
  routerMiddleware(browserHistory)
];
