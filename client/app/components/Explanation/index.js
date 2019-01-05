import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import components from './components';
import Box from './Box';
import Wrapper from './Wrapper';

const ExplanationHeader = styled.div`
  text-align: center;
  background-color: ${props => props.theme.main_blue};
  color: ${props => props.theme.main_white};
  padding: 10px 20px;
`;

class Explanation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      
      <div className='row'>
        <Wrapper>
          <ExplanationHeader>
            <p>We make it easy for you to send a postcard to your political representative with just one address form and a few clicks. Skip the store and the post office and have a postcard delivered to your politican of choice for only $1 each!</p>
          </ExplanationHeader>
          <h2>How it works:</h2>
          {components.map((component) => {
          return <Box component={component} key={component.id} />
          })}
        </Wrapper>
      </div>
    );
  }
}

Explanation.propTypes = {

};

export default Explanation;
