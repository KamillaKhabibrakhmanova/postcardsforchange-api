import axios from 'axios';

import {
  FETCH_BRAINTREE_TOKEN
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