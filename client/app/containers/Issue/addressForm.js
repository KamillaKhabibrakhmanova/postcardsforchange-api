import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import styled from 'styled-components';
import {fetchRepresentatives} from './actions';
import { browserHistory } from 'react-router';

import MainHeader from 'components/MainHeader';
import { STATES } from './constants';

const FormBox = styled.div`
  form {
      display: inline-block;
  }

  button {
  -webkit-border-radius: 30;
  -moz-border-radius: 30;
  border-radius: 30px;
  font-family: Arial;
  color: #ffffff;
  font-size: 15px;
  background: #3498db;
  padding: 5px 10px 5px 10px;
  text-decoration: none;
}

.button:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}
`;

export class AddressForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleSubmit(address) {
   const self = this;
   Promise.resolve(this.props.fetchRepresentatives(address))
   .then(function(data){
       console.log('data', data);
       browserHistory.push(`/issues/${self.props.issue._id}/representatives`)
   }) 
  }
  
  render() {
    const address = {};
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
                <td><label htmlFor="address.street1" id="address.street1">Street Line 1:</label></td>
            <td><Control.text model="address.street1" /></td>
            </tr>
            <tr>
                <td><label htmlFor="address.street2" id="address.street2">Street Line 2:</label></td>
            <td><Control.text model="address.street2" /></td>
            </tr>
            <tr>
                <td><label htmlFor="address.city" id="address.city">City:</label></td>
            <td><Control.text model="address.city" /></td>
            </tr>
            <tr>
                <td><label htmlFor="address.state" id="address.state">State: </label></td>
            <td><Control.select model="address.state" id="address.state">
                {Object.keys(states).map(state => <option value={state} key={state}>{states[state]}</option>)}
            </Control.select></td>
            </tr>
            <tr>
                <td><label htmlFor="address.zip" id="address.zip">Zip:</label></td>
            <td><Control.text model="address.zip" /></td>
            </tr>
            <tr><td></td><td><button type="submit">Submit</button></td></tr>
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
