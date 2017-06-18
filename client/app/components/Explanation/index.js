import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import components from './components';
import Box from './Box';

class Explanation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='row bottom-row'>
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
