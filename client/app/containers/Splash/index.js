import React, { PropTypes } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {BASE_URL} from 'utils/constants';
import Logo from 'components/Logo';
import SignupForm from 'components/SignupForm';
import Explanation from 'components/Explanation';
import Social from 'components/Social';

const SocialBar = styled.div`
  text-align: center;
  margin-top: 0rem;
`;

export class Splash extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      emailText: 'Get active! Sign up to get notified when we launch!',
    }

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    const self = this;
    return axios.post(`${BASE_URL}api/users`, {
      email: this.state.email
    })
    .then(function(resp) {
      self.setState({email: '', emailText: 'Thanks! We will notify you when we launch.'})
    })
    .catch(function(err){
      console.error('error', err)
      self.setState({emailText: 'There was an error with your request. Please try again using a valid email address'})
    })
  }

  onChange(e) {
    this.setState({ email: e.target.value })
  }
  
  render() {
    return (
      <div>
        <Helmet
          title="Postcards For Change"
          meta={[
            { name: 'description', content: 'Postcardsfor Change - an app to send postcards to your representatives about issues your care about.' },
          ]}
        />
        <Logo large/>

          <SocialBar>
            <Social type='instagram' />
            <Social type='twitter' />
            <Social type='facebook' />
          </SocialBar>

        <SignupForm email={this.state.email} onChange={this.onChange} onSubmitForm={this.onSubmitForm} emailText={this.state.emailText}></SignupForm>

        <Explanation />
      </div>
    );
  }
}

export default Splash;
