import {
  SEND_POSTCARDS
} from '../../actions/index';

const initialState = {};

function postcardReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_POSTCARDS:
      return Object.assign({}, state, {postcardResults: action.payload.data})
    default:
      return state;
  }
}

export default postcardReducer;
