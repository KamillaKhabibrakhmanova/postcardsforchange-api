import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import Input from './input';

const BlueBox = styled.div`
  background-color: ${props => props.theme.main_blue};
  display: block;
  height: 100%;
  padding: auto;
  text-align: center;
  margin: auto;
  form {
    margin: auto;
    width: 100%;
    padding: 10%;
    text-align: center;
    }
`;

const Button = styled.button`
  background-color: ${props => props.theme.main_turqouise};
  margin: 1rem 1rem;
  width: 15rem;
  height: 33%;
  :focus {
    outline: 0 !important;
  }
`;

class SignupForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  render() {
    return (
      <BlueBox className='row'>

      <div className='col-sm-12 col-md-6'>
        <form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="email">
            <Input
              id="email"
              type="text"
              placeholder="your_email@example.com"
              value={this.props.email}
              onChange={this.props.onChange}
            />
          </label>
          <Button class='btn btn-info form-control'><input type='submit'></input></Button>
        </form>
      </div>
      <Text className='col-sm-12 col-md-6'>
        {this.props.emailText}
      </Text>
      </BlueBox>
    );
  }
}

export default SignupForm;
