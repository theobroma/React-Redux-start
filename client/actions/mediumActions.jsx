import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { SET_RESPONSE,SET_SELECTION,CLEAR_DATA,ADD_COMMENT,GET_COMMENTS,DELETE_COMMENTS } from '../actions/types';

export function onResponseChange(text) {
  return dispatch => dispatch({
    type: SET_RESPONSE,
    text
  });
}

export function onGetSelection(selection) {
  return dispatch => dispatch({
    type: SET_SELECTION,
    selection
  });
}
export function clearCommentData() {
  return dispatch => dispatch({
    type: CLEAR_DATA
  });
}

export function onPublish(data) {
  return (dispatch) => {
    axios.post(`${apiPrefix}/medium`,data)
    .then((response) => {
      dispatch({
        type: ADD_COMMENT,
        data: response.data.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function loadComments() {
  return (dispatch) => {
    axios.get(`${apiPrefix}/medium`)
    .then((response) => {
      dispatch({
        type: GET_COMMENTS,
        data: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function deleteComments() {
  return dispatch => axios.delete(`${apiPrefix}/medium`)
    .then(() => {
      dispatch({
        type: DELETE_COMMENTS
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
