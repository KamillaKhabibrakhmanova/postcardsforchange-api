
import { fromJS } from 'immutable';
import splashReducer from '../reducer';

describe('splashReducer', () => {
  it('returns the initial state', () => {
    expect(splashReducer(undefined, {})).toEqual(fromJS({}));
  });
});
