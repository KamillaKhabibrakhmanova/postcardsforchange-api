import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import components from './components';
import Box from './Box';
import H2 from '../H2';

const ExplanationHeader = styled.div`
  text-align: center;
  background-color: ${props => props.theme.main_blue};
  color: ${props => props.theme.main_white};
  font-size: 2em;
  width:100%;
  padding: 10px;
  
  h2 {
    margin: 0;
  }
`;

class Explanation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      
      <div className='row'>
        <ExplanationHeader>
          <h2>How it works:</h2>
        </ExplanationHeader>
        {components.map((component) => {
        return <Box component={component} key={component.id} />
        })}
      </div>
    );
  }
}

Explanation.propTypes = {

};

export default Explanation;
