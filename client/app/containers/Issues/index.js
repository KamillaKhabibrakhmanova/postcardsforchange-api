import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import axios from 'axios';
import {BASE_URL} from 'utils/constants';
import styled from 'styled-components';
import { fetchIssues } from 'actions/index';
import { createStructuredSelector } from 'reselect';
import { makeSelectIssues } from 'containers/App/selectors';

import Logo from 'components/Logo';
import MainHeader from 'components/MainHeader';
import H1 from 'components/H1';
import IssueCard from './IssueCard';
import Social from 'components/Social';
import Explanation from 'components/Explanation';

const SocialBar = styled.div`
  text-align: center;
  margin-top: 0rem;
`;


export class Issues extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      issues:[]
    }
  }

  componentDidMount() {
    this.props.fetchIssues();
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

  render() {
    return (
      <div>
        <Helmet
          title="Issues"
          meta={[
            { name: 'description', content: 'Description of Issues' },
          ]}
        />
        <MainHeader />
        <Explanation />
        <div className='main'>
          <h2>Select an issue that matters to you:</h2>
          <div className='row'>
            {this.props.issues.map(issue => <IssueCard issue={issue} key={issue._id}/>)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    issues: state.global.issues
  }
}

export default connect(mapStateToProps, {fetchIssues})(Issues);
