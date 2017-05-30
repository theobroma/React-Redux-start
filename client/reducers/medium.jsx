import { SET_RESPONSE, SET_SELECTION, CLEAR_DATA,ADD_COMMENT, FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../actions/types';
const initialState = {
  username: "John Doe",
  response: "",
  selection:"",
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function medium (state = initialState, action) {
  switch (action.type) {
    case SET_RESPONSE:
      return {
        ...state,
        response: action.text
      }
    case SET_SELECTION:
      return {
        ...state,
        selection: action.selection
      }
    case CLEAR_DATA:
      return {
        ...state,
        response: "",
        selection: "",
      }
    default:
      return state
  }
}
