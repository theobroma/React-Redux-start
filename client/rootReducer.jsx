import { combineReducers } from 'redux';
import medium from './reducers/medium';
import comments from './reducers/comments';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

export default combineReducers({
  medium,
  comments,
  routing: routerReducer
});
