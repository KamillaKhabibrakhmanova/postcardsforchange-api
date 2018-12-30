import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Script from 'react-load-script'

import {fetchBraintreeToken, sendPostcards} from './actions';
import {ENVIRONMENT} from 'utils/constants';
import MainHeader from 'components/MainHeader';
import Button from 'components/Button';
import RepForm from './RepForm';
import Img from 'components/Img';
import LoadingIndicator from 'components/LoadingIndicator';
 
const braintree = require('braintree-web');

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
      braintreeToken: null,
      loading: false
    }
  }

  componentDidMount() {
    const self = this;
    return axios.get(`/api/payments/client-token`)
    .then(function(res){
      return Promise.resolve(braintree.client.create({
        authorization: res.data.clientToken
      }))
    })
    .then(function(data){
      return self.clientDidCreate(data);
    })
  }

  componentWillUnmount() {
    this.props.dispatch(actions.reset('selectedReps.selected'));
  }

  clientDidCreate(client) {
    console.log('ENVIONMENT', ENVIRONMENT)
    const self = this;

    return Promise.resolve(braintree.paypalCheckout.create({
      client: client
    }))
    .then(function(paypalCheckoutInstance) {
      return paypal.Button.render({
        env: ENVIRONMENT === 'production' ? 'production' : 'sandbox',
        locale: 'en_US',

        payment: function() {
          if (self.props.selectedReps.selected.length < 1) {
            self.props.showMinimumRepsError = true;
            return;
          }

          return paypalCheckoutInstance.createPayment({
            flow: 'vault'
          })
        },

        onAuthorize: function(data, actions) {
          return paypalCheckoutInstance.tokenizePayment(data).then(function (payload){
            
            self.setState({loading: true})

            return self.props.sendPostcards({
              nonce: payload.nonce,
              issueId: self.props.routeParams.id,
              representatives: self.props.selectedReps.selected,
              user: self.props.user
            })
            .then(function(res){
              browserHistory.push(`/confirmation`)
            })
            .catch(function(err){
              console.error(err)
              browserHistory.push(`/confirmation`);
            })
          })
        },

        onError: function(err){
          console.error('checkout.js error', err);
          browserHistory.push(`/confirmation`);
        }
      }, "#paypal-button")
    })
  }

  createRepCard(representative, index) {
    if (!representative) return;
    const address = representative.address[0];

    return (
      <div className={`col-md-3 col-sm-12 rep_content ${representative.party.toLowerCase()}`} key={representative.name}>
        <li><Control.checkbox model='.selected[]' value={JSON.stringify(representative)} id={`rep_${index}`} className="big_checkbox" />
        <label htmlFor={`rep_${index}`}>
        <RepCardBox>
          <img className='circle-img' src={representative.photoUrl || 'http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg'} alt={representative.name} />
          <span className='rep-info'>
            <p>{`${representative.name}, ${representative.party[0]}`}</p>
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
        <div className='rep-box row' key={index}>
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
        <Script
          url="https://www.paypalobjects.com/api/checkout.js"
        />
        <Helmet
          title="Representatives"
          meta={[
            { name: 'description', content: 'Representatives' },
          ]}
        />
        <MainHeader />
        <RepForm>
          <div className='main'>
            {!this.state.loading && <div>
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
                  <p>Total cost: ${this.props.selectedReps.selected.length}.00</p>
                }
                {this.props.showMinimumRepsError}
                {!this.props.selectedReps.selected && this.props.showMinimumRepsError &&
                  <p>Please select at least one representative to send a postcard to!</p>
                }
              </ul>
              <div id="#paypal-button"></div>
            </Form></div>}
            {this.state.loading && <div><LoadingIndicator /><p><strong>Hang tight! We're sending your postcards....</strong></p></div>}
          </div>
        </RepForm>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.address,
    address: state.global.address,
    issue: state.global.issue,
    braintreeToken: state.global.braintreeToken,
    selectedReps: state.selectedReps,
    representatives: state.global.representatives
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    sendPostcards: async data => {
        try {
          const result = await sendPostcards(data);
          dispatch(result);
        } catch (err) {
          dispatch(err);
        }
    },
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Representatives);
