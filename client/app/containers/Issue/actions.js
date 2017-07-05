import axios from 'axios';

export const FETCH_ISSUE = 'FETCH_ISSUE';
export const FETCH_REPRESENTATIVES = 'FETCH_REPRESENTATIVES';

export function fetchIssue(id) {
	const request = axios.get(`/api/issues/${id}`)

	return {
		type: FETCH_ISSUE,
		payload: request
	};
}

export function fetchRepresentatives(data) {
  const addressString = `${data.street1}, ${data.street2 ? data.street2 + ', ' : ''}${data.city}, ${data.state}, ${data.zip}`;
  
  const user = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email
  }

  const address = {
    street1: data.street1,
    street2: data.street2,
    city: data.city,
    state: data.state,
    zip: data.zip
  }

  return axios.get(`/api/representatives?address=${addressString}`)
  .then(function(response){
    return {
      type: FETCH_REPRESENTATIVES,
      payload: {
        data: {
          user,
          address,
          representatives: response.data
        }
      }
    }
  })
}

