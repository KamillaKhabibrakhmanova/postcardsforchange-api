import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import axios from 'axios';
import {BASE_URL} from 'utils/constants';
import styled from 'styled-components';

import Logo from 'components/Logo';
import Social from 'components/Social';
import H1 from 'components/H1';
import IssueCard from './IssueCard';

const HeaderBar = styled.div`
  .social {
    float: right;
  }
`;

console.log('BASEURL', BASE_URL)

export class Issues extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      issues: []
    }
  }

  repeatIssues(data) {
    let i = 0;
    let result = [];
    while ( i < 6) {
      result.push(data);
      i++;
    }
    return result;
  }

  componentDidMount() {
    const self = this;
    return axios.get(`${BASE_URL}api/issues`)
    .then(function(resp) {
      //TODO don't repeat before pushing since we'll get more issues
      self.setState({
        issues: self.repeatIssues(resp.data[0])
      })
    })
  }

  render() {
    return (
      <div>
        <Helmet
          title="Issues"
          meta={[
            { name: 'description', content: 'Description of Issues' },
          ]}
        />
        <HeaderBar>
          <div className='social'>
            <Social type='instagram' small />
            <Social type='twitter' small/>
            <Social type='facebook' small />
          </div>
          <Logo />
        </HeaderBar>
        <div className='main'>
          <H1>Select an issue that matters to you:</H1>
          <div className='row'>
            {this.state.issues.map(issue => <IssueCard issue={issue} key={issue.id}/>)}
          </div>
        </div>
      </div>
    );
  }
}

Issues.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Issues);
