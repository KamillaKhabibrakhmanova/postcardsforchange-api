import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import styled from 'styled-components';
import {fetchRepresentatives} from './actions';
import { browserHistory } from 'react-router';

import Button from 'components/Button';
import { STATES } from './constants';

const FormBox = styled.div`
  color: #f0f0f0;
  form {
      display: inline-block;
  }

  .email_subscribe {
      font-weight: 300;
      font-size: 12px;
      line-height: 1rem;
  }
}
`;

export class AddressForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  handleSubmit(address) {
   const self = this;
   Promise.resolve(this.props.fetchRepresentatives(address))
   .then(function(data){
       browserHistory.push(`/issues/${self.props.issue._id}/representatives`)
   }) 
  }
  
  render() {
    const address = {
        isSubscribed: true
    };
    const states = STATES

    return (
    <div>
      <FormBox>
      <Form model="address" onSubmit={(address) => this.handleSubmit(address)}>
          <table><tbody>
            <tr>
                <td><label htmlFor="address.firstName">First name:</label></td>
            <td><Control.text model="address.firstName" id="address.firstName" /></td>
            </tr>
            <tr>
                <td><label htmlFor="address.lastName">Last name:</label></td>
            <td><Control.text model="address.lastName" id="address.lastName" /></td>
            </tr>
            <tr>
                <td><label htmlFor="address.email" id="address.email">Email:</label></td>
            <td><Control.text model="address.email" type="email" /></td>
            </tr>
            <tr>
            <td></td>
            <td>
                <Control.checkbox model="address.isSubscribed" />
                <label htmlFor="address.isSubscribed" id="address.isSubscribed" className="email_subscribe">Subscribe to email list?</label></td>
            </tr>
            <tr>
                <td><label htmlFor="address.line1" id="address.line1">Street Line 1:</label></td>
            <td><Control.text model="address.line1" /></td>
            </tr>
            <tr>
                <td><label htmlFor="address.line2" id="address.line2">Street Line 2:</label></td>
            <td><Control.text model="address.line2" /></td>
            </tr>
            <tr>
                <td><label htmlFor="address.city" id="address.city">City:</label></td>
            <td><Control.text model="address.city" /></td>
            </tr>
            <tr>
                <td><label htmlFor="address.state" id="address.state">State:</label></td>
            <td><Control.select model="address.state" id="address.state">
                {Object.keys(states).map(state => <option value={state} key={state}>{states[state]}</option>)}
            </Control.select></td>
            </tr>
            <tr>
                <td><label htmlFor="address.zip" id="address.zip">Zip:</label></td>
            <td><Control.text model="address.zip" /></td>
            </tr>
            <tr><td></td><td><Button type="submit">Submit</Button></td></tr>
       </tbody> </table>
      </Form>
      </FormBox>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    issue: state.global.issue
  }
};

export default connect(mapStateToProps, {fetchRepresentatives})(AddressForm);
