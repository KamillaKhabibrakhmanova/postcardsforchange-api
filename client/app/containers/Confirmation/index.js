import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import Logo from 'components/Logo';
import MainHeader from 'components/MainHeader';
import H1 from 'components/H1';

export class Confirmation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  generateSuccess() {
    const props = this.props;
    const postcards = props.postcardResults.postcards;
  
    const errors = props.postcardResults.unsent && props.postcardResults.unsent.map(error => error.name.join(', '));
    const postcardString = postcards.length > 1 ? 'postcards' : 'postcard';

    return (
      <div className='main'>
         <H1>Success!</H1><br />
         <div>
            <p>We've successfully sent {postcards.length.toString()} {postcardString}</p>
            <p>You should be receiving a confirmation email shortly.</p>
          </div>
          <div className='row'> 
             {errors &&
               <span><p>We were unable to sent the postcards to the following people:
               {errors}.
              </p>
              <p>You will not be charged for these postcards.</p></span>}         
          </div>
          <div className='row'>
            <p>Want to send more? <Link to={"/issues"}>Check out our other issues</Link></p>   
          </div>
      </div>
    )
  }

  generateError() {
    const props = this.props;

    return (
      <div className='main'>
      <H1>Oh no!</H1>
      <p>We were unable to send any of your postcards. You will not be charged. Please
         <Link to={"/issues"}> try again </Link>
         or <a href="mailto:contact@postcardsforchange.net"> contact us </a> 
         if you continue to experience issues.
      </p>
      </div>
    )
  }

  
  render() {
    const postcards = this.props.postcardResults.postcards;
    const content = postcards && postcards.length ? this.generateSuccess() : this.generateError();

    return (
      <div>
        <Helmet
          title="Confirmation"
          meta={[
            { name: 'description', content: 'Postcards sent confirmation' },
          ]}
        />
        <MainHeader />
        {content}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postcardResults: state.global.postcardResults,
    issue: state.global.issue
  }
}

export default connect(mapStateToProps, {})(Confirmation);

