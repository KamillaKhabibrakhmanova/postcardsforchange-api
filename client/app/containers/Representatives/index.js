import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Control, Form, actions } from 'react-redux-form';

import {fetchBraintreeToken} from './actions';
import MainHeader from 'components/MainHeader';
import Button from 'components/Button';
import RepCard from './repCard';
import Img from 'components/Img';

const DropIn = require('braintree-react').DropIn;
const braintree = require('braintree-web');

const RepForm = styled.div`

  .rep-border {
    border: 2px solid red;
    margin-bottom: 2rem;
  }

  text-align: left;

  p {
    line-height: 1.5rem;
    font-size: 1.5rem;
  }

  li {
    overflow: hidden;
  }

  input[type="checkbox"], label {
    float: left;
    line-height: 1.6em;
    height: 8 rem;
    padding: 0px;
    font-size: inherit;
  }

  input {
    top: 5rem;
  }

  label {
    margin: 0 auto;
    margin-top: -2rem;
    width: 100%;
  }
`;

const RepCardBox = styled.div`

  .circle-img {
    overflow: hidden;
    display:inline;
    height: 6rem;
    margin-bottom: 1.5rem;
  }
`;

export class Representatives extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleSubmit(nonce) {
    console.log('nonce', nonce)
  }

  // componentDidMount() {
  //   this.props.fetchRepresentatives();
  // }

  componenWillMount() {
    console.log('WILL MOUNT')
    return Promise.resolve(this.props.fetchBraintreeToken())
  }

  createRepCards() {
    return this.props.representatives.map((representative, index) => {
      const address = representative.address[0];
      return (
        <div key={representative.name} className='rep-box row'>
          <div className='col-md-4 col-sm-0'></div>
            <div className='col-md-4 col-sm-12 rep-border'>
            <li><Control.checkbox model='.selected[]' value={JSON.stringify(representative)} id={`rep_${index}`} />
            <RepCardBox>
              <label htmlFor={`rep_${index}`}>
           
              <img className='circle-img' src={representative.photoUrl || 'http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg'} alt={representative.name} />
              <span className='rep-info'>
                <p><a href={representative.urls[0]}>{`${representative.name},`}</a></p>
                <p>{`${address.line1}, ${address.city}, ${address.state}, ${address.zip}`}</p>
              </span>
              </label>
            </RepCardBox>
            </li>
          </div>
          <div className='col-md-4 col-sm-0'></div>
        </div>
      )
    })
  }

  createDropIn() {
    console.log('props', this.props);
    const self = this;
    Promise.resolve(self.props.fetchBraintreeToken())
    .then(() => {
      return <DropIn braintree={braintree} clientToken={self.props.braintreeToken} />
    })
  }

  render() {
    return (
      <div>
        <Helmet
          title="Representatives"
          meta={[
            { name: 'description', content: 'Description of Representatives' },
          ]}
        />
        <MainHeader />
        <RepForm>
          <div className='main'>
            <div className='row'>
              <div className='col-md-4 col-sm-0'></div>
              <div className='col-md-4 col-sm-12'>
                <h2>Select your representatives:</h2>
                <p>Select the representatives you want your postcard to be sent to.</p>
                <p>The cost per representatives is $1.</p>
              </div>
              <div className='col-md-4 col-sm-0'></div>
            </div>
            <Form model="representatives" onSubmit={(representatives) => this.handleSubmit(representatives.selected)}>
              <ul>
               <DropIn braintree={braintree} clientToken={this.props.braintreeToken} /> 
              </ul>
              <Button type='submit'>Pay with Paypal</Button>
            </Form>
          </div>
        </RepForm>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    //change this before deploying
    address: {
      city: 'Syosset',
      state: 'NY',
      street1: '26 Bluebird Dr.',
      zip: '11791'
    },
    user: state.global.user,
    // address: state.global.address,
    issue: state.global.issue,
    braintreeToken: state.global.braintreeToken,
    // representatives: state.global.representatives
    representatives: [
  {
   "name": "Donald J. Trump",
   "address": [
    {
     "line1": "The White House",
     "line2": "1600 Pennsylvania Avenue NW",
     "city": "Washington",
     "state": "DC",
     "zip": "20500"
    }
   ],
   "party": "Republican",
   "phones": [
    "(202) 456-1111"
   ],
   "urls": [
    "http://www.whitehouse.gov/"
   ],
   "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
   "channels": [
    {
     "type": "GooglePlus",
     "id": "+whitehouse"
    },
    {
     "type": "Facebook",
     "id": "whitehouse"
    },
    {
     "type": "Twitter",
     "id": "potus"
    },
    {
     "type": "YouTube",
     "id": "whitehouse"
    }
   ]
  },
  {
   "name": "Mike Pence",
   "address": [
    {
     "line1": "The White House",
     "line2": "1600 Pennsylvania Avenue NW",
     "city": "Washington",
     "state": "DC",
     "zip": "20500"
    }
   ],
   "party": "Republican",
   "phones": [
    "(202) 456-1111"
   ],
   "urls": [
    "http://www.whitehouse.gov/"
   ],
   "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
   "channels": [
    {
     "type": "GooglePlus",
     "id": "+whitehouse"
    },
    {
     "type": "Facebook",
     "id": "whitehouse"
    },
    {
     "type": "Twitter",
     "id": "VP"
    }
   ]
  },
  {
   "name": "Charles E. Schumer",
   "address": [
    {
     "line1": "322 Hart Senate Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20510"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(202) 224-6542"
   ],
   "urls": [
    "http://www.schumer.senate.gov/"
   ],
   "photoUrl": "http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "chuckschumer"
    },
    {
     "type": "Twitter",
     "id": "SenSchumer"
    },
    {
     "type": "YouTube",
     "id": "SenatorSchumer"
    },
    {
     "type": "YouTube",
     "id": "ChuckSchumer"
    }
   ]
  },
  {
   "name": "Kirsten E. Gillibrand",
   "address": [
    {
     "line1": "478 Russell Senate Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20510"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(202) 224-4451"
   ],
   "urls": [
    "http://www.gillibrand.senate.gov/"
   ],
   "photoUrl": "http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "KirstenGillibrand"
    },
    {
     "type": "Twitter",
     "id": "SenGillibrand"
    },
    {
     "type": "YouTube",
     "id": "KirstenEGillibrand"
    }
   ]
  },
  {
   "name": "Thomas R. Suozzi",
   "address": [
    {
     "line1": "226 Cannon House Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20515"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(202) 225-3335"
   ],
   "urls": [
    "https://suozzi.house.gov/"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "RepTomSuozzi"
    },
    {
     "type": "Twitter",
     "id": "RepTomSuozzi"
    }
   ]
  }
 ]
  }
}

export default connect(mapStateToProps, {fetchBraintreeToken})(Representatives);
