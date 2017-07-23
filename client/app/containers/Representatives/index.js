import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';

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

  input {
    top: 5rem;
  }

  label {
    margin: 0 auto;
    margin-top: -2rem;
    width: 100%;
  }

  .rep-box {
    a {
      color: #ffffff;
    }

    .rep_content {
      margin-bottom: 2rem;
      margin-right: 2rem;
    }
  }

  .rep_address {
    font-size: 1.2rem;
    font-weight: 300;
  }

  .democratic {
    background-color:  ${props => props.theme.democrat_blue};
  }

  .republican {
    background-color: ${props => props.theme.republican_red};
  }

  .independent {
    background-color: ${props => props.theme.independent_teal};
  }
`;

const RepCardBox = styled.div`
  .circle-img {
    overflow: hidden;
    display:inline;
    height: 6rem;
    margin-bottom: 1.5rem;
    border-radius: 50%;
  }
`;

export class Representatives extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      braintreeToken: null
    }
  }
  handleSubmit(nonce) {
    console.log('nonce', nonce)
  }

  componentDidMount() {
    this.props.fetchBraintreeToken();
  }

  componentDidMount() {
    console.log('mounted')
    const self = this;
    return axios.get(`/api/payments/client-token`)
    .then(function(res){
      console.log('res', res)
      return Promise.resolve(braintree.client.create({
        authorization: res.data.clientToken
      }))
    })
    .then(function(data){
      return self.clientDidCreate(data);
    })
  }

  clientDidCreate(client) {
    return Promise.resolve(braintree.paypalCheckout.create({
      client: client
    }))
    .then(function(paypalCheckoutInstance) {
      return paypalButton.render({
        env: 'sandbox',
        
        locale: 'en_US',

        payment: function() {
          return paypalCheckoutInstance.createPayment({
            flow: 'vault'
          })
        },

        onAuthorize: function(data, actions) {
          return paypalCheckoutInstance.tokenizePayment(data).then(function (payload){
            console.log('payload', payload)
          })
        }
      }, "#paypal-button")
    })
    // , function (createError, paypalCheckoutInstance){
    //   if (createErr) {
    //     console.error('Error: ', createErr);
    //   }

    //   paypalButton.render({
    //     env: 'sandbox',
        
    //     locale: 'en_US',

    //     payment: function() {
    //       return paypalCheckoutInstance.createPayment({
    //         flow: 'vault'
    //       })
    //     },

    //     onAuthorize: function(data, actions) {
    //       return paypalCheckoutInstance.tokenizePayment(data).then(function (payload){
    //         console.log('payload', payload)
    //       })
    //     }
    //   }, "#paypal-button")
    // })
  }

  createRepCard(representative, index) {
    if (!representative) return;
    const address = representative.address[0];

    return (
      <div className={`col-md-3 col-sm-12 rep_content ${representative.party.toLowerCase()}`} key={representative.name}>
        <li><Control.checkbox model='.selected[]' value={JSON.stringify(representative)} id={`rep_${index}`} className="big_checkbox" />
        <label htmlFor={`rep_${index}`} class="btn">
        <RepCardBox>
          <img className='circle-img' src={representative.photoUrl || 'http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg'} alt={representative.name} />
          <span className='rep-info'>
            <p><a href={representative.urls[0]}>{`${representative.name}, ${representative.party[0]}`}</a></p>
            <p className='rep_address'>{`${address.line1}, ${address.city}, ${address.state}, ${address.zip}`}</p>
          </span>
        </RepCardBox></label>
        </li>
      </div>
    )
  }

  createRepCards() {
    return this.props.representatives.map((representative, index) => {
      if (index%2 !== 0) return;

      return (
        <div className='rep-box row'>
          <div className='col-sm-0 col-md-3'></div>
            {this.createRepCard(representative, index)}
            {this.createRepCard(this.props.representatives[index+1], index+1)}
          <div className='col-sm-0 col-md-3'></div>
        </div>
      )
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
                <p>The cost per representative is $1.</p>
              </div>
              <div className='col-md-4 col-sm-0'></div>
            </div>
            <Form model="selectedReps" onSubmit={(selectedReps) => this.handleSubmit(selectedReps.selected)}>
              <ul>
               {this.createRepCards()}
              </ul>
              <ul>
                {this.props.selectedReps.selected &&
                  <span>Total cost: ${this.props.selectedReps.selected.length}.00</span>
                }
              </ul>
              { this.state.braintreeToken &&
                <div><h1>{this.state.braintreeToken}</h1><DropIn braintree={braintree} clientToken={this.state.braintreeToken} /></div>
              }
              <div id="#paypal-button"></div>
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
    selectedReps: state.selectedReps,
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
   "party": "Independent",
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
