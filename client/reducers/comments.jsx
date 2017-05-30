import { GET_COMMENTS,DELETE_COMMENTS,ADD_COMMENT} from '../actions/types';
const initialState = {
  data: []
}

export default function comments (state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        data: action.data
      }
    case ADD_COMMENT:
      return {
        ...state,
        data: state.data.concat(action.data)
      }
    case DELETE_COMMENTS:
      return {
        ...state,
        data: []
      }
    default:
      return state
  }
}
