/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.global;

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState['currentUser']
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState['loading']
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState['error']
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.userData.repositories
);

const makeSelectIssues = () =>
  createSelector(
    selectGlobal,
    (globalState) =>{
      globalState['issues']
    } 
  );

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.route; // or state.route

    if (routingState !== prevRoutingState) {
      prevRoutingState = routingState;
    }

    return prevRoutingState;
  };
};

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectIssues,
  makeSelectLocationState,
};
