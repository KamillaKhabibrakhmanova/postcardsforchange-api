
import { fromJS } from 'immutable';
import issueReducer from '../reducer';

describe('issueReducer', () => {
  it('returns the initial state', () => {
    expect(issueReducer(undefined, {})).toEqual(fromJS({}));
  });
});
