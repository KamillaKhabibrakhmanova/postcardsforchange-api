/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  FETCH_ISSUES,
  FETCH_ISSUE,
  FETCH_REPRESENTATIVES,
  FETCH_BRAINTREE_TOKEN,
  SEND_POSTCARDS
} from '../../actions/index';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  issues: []
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ISSUES:
      return Object.assign({}, state, {issues: action.payload.data})
    case FETCH_ISSUE:
      return Object.assign({}, state, {issue: action.payload.data})
    case FETCH_REPRESENTATIVES:
      return Object.assign({}, state, {
        user: action.payload.data.user,
        address: action.payload.data.address,
        representatives: action.payload.data.representatives
      })
    case FETCH_BRAINTREE_TOKEN:
      return Object.assign({}, state, {braintreeToken: action.payload.data.clientToken})
    case SEND_POSTCARDS:
      return Object.assign({}, state, {postcardResults: action.payload.data})
    default:
      return state;
  }
}

export default appReducer;
