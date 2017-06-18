import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, defineMessages } from 'react-intl';
import messages from './messages';
import Img from '../Img';

const Box = styled.div`
  margin: 0 auto;
  background-color: #ffffff;
  text-align: center;
  font-size: 1.9rem;
  .title {
    color: ${props => props.theme.main_red}
  }
  .message {
    color: ${props => props.theme.main_blue}
    padding: 0 0.3rem;
  }
`;

class Explanation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.messages = defineMessages({
      title: {
        id: props.component.id + '_title',
        defaultMessage: props.component.title
      },
      text: {
        id: props.component.id + '_text',
        defaultMessage: props.component.text
      }
    });
  }

  render() {
    return (
      <Box className='col-sm-12 col-md-6 col-lg-4'>
        <Img src={this.props.component.img} alt='' />
        <p className='title'><strong><FormattedMessage {...this.messages.title} /></strong></p>
        <p className='message'>
          <FormattedMessage {...this.messages.text} />
        </p>
      </Box>
    );
  }
}

Explanation.propTypes = {

};

export default Explanation;
