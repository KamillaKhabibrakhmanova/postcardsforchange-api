import axios from 'axios';

import {
  FETCH_BRAINTREE_TOKEN,
  SEND_POSTCARDS
} from '../../actions/index';

export function fetchBraintreeToken() {
	return axios.get(`/api/payments/client-token`)
    .then(data => {
        return {
            type: FETCH_BRAINTREE_TOKEN,
            payload: data
	    };
    })	
}

export function sendPostcards(body) {
    return axios.post('/api/postcards', body)
    .then(data => {
        return {
            type: SEND_POSTCARDS,
            payload: data
        }
    })
    .catch(err => {
        console.error(err);
        return {
            type: SEND_POSTCARDS,
            payload: { data: null }
        }
    })
}