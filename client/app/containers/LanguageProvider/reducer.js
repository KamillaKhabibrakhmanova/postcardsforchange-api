/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import {
  CHANGE_LOCALE,
} from './constants';
import {
  DEFAULT_LOCALE,
} from '../App/constants';

const initialState = {
  locale: DEFAULT_LOCALE,
};

function languageProviderReducer(state = initialState, action) {
  console.log('state',state)
  switch (action.type) {
    case CHANGE_LOCALE:
      return Object.assign({}, state, {locale: action.locale})
    default:
      return state;
  }
}

export default languageProviderReducer;
