import {
  FETCH_ISSUE,
} from './constants';

const initialState = {};

function issueReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ISSUE:
      return Object.assign({}, state, {issue: action.payload.data})
    default:
      return state;
  }
}

export default issueReducer;
