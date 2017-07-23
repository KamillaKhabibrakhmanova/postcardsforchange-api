import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {fetchIssue} from './actions';

import Img from 'components/Img';
import MainHeader from 'components/MainHeader';
import AddressForm from './addressForm';

export class Issue extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchIssue(this.props.params.id)
  }
  
  render() {
    const issue = this.props.issue;

    if (!issue) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Helmet
          title="Issue"
          meta={[
            { name: 'description', content: 'Description of Issue' },
          ]}
        />
        <MainHeader />
        <div className='main'>
          <div className='row'>
            <h2>{issue.title}</h2><br />
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <Img src={issue.postcard_image} alt={issue.title} className='issue_card'/>
            </div>
            <div className='col-sm-12 col-md-6'>
              <h3>Message on back: </h3>
              <p> {issue.message} </p>
            </div>
          </div>
           <div className='row'>
            <div className='col-sm-12'>
              <h2>Ready to send?</h2>
              <p>Enter your address below to find your representatives:</p>
              <AddressForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    issue: state.global.issue
  }
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, {fetchIssue})(Issue);
