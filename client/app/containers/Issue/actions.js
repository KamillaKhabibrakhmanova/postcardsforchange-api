import axios from 'axios';

export const FETCH_ISSUE = 'FETCH_ISSUE';

export function fetchIssue(id) {
	const request = axios.get(`/api/issues/${id}`)

	return {
		type: FETCH_ISSUE,
		payload: request
	};
}

