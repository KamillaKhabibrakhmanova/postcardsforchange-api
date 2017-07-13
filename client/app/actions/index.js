import axios from 'axios';

export const FETCH_ISSUES = 'FETCH_ISSUES';
export const FETCH_ISSUE='FETCH_ISSUE';
export const FETCH_REPRESENTATIVES='FETCH_REPRESENTATIVES';
export const FETCH_BRAINTREE_TOKEN='FETCH_BRAINTREE_TOKEN';

export function fetchIssues() {
	const request = axios.get(`/api/issues`)

	return {
		type: FETCH_ISSUES,
		payload: request
	};
}
