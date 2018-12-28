import { createSelector } from 'reselect';

/**
 * Direct selector to the issue state domain
 */
const selectIssueDomain = () => (state) => state.get('issue');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Issue
 */

const makeSelectIssue = () => createSelector(
  selectIssueDomain(),
  (substate) => substate.toJS()
);

export default makeSelectIssue;
export {
  selectIssueDomain,
};
