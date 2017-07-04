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
  FETCH_ISSUES
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
      console.log('FETCH', action.payload)
      console.log(Object.assign({}, state, {issues: action.payload.data}))
      return Object.assign({}, state, {issues: action.payload.data})
      console.log('state', state)
    default:
      console.log('DEFAULT')
      return state;
  }
}

export default appReducer;
