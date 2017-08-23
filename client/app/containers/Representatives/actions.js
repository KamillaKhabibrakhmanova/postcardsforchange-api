import axios from 'axios';

import {
  FETCH_BRAINTREE_TOKEN,
  SEND_POSTCARDS
} from '../../actions/index';

export function fetchBraintreeToken() {
	return axios.get(`/api/payments/client-token`)
    .then(data => {
        console.log('data', data)
        return {
            type: FETCH_BRAINTREE_TOKEN,
            payload: data
	    };
    })	
}

export function sendPostcards(nonce, issueId, representatives, user) {
    return axios.post('api/postcards', {nonce, issueId, representatives, user})
    .then(data => {
        return {
            type: SEND_POSTCARDS,
            payload: data
        }
    })
}