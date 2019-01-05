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
  padding-bottom: 1rem;
  .title {
    color: ${props => props.theme.main_red}
  }
  .message {
    color: ${props => props.theme.main_blue}
    padding: 0 0.3rem;
  }

  @media all and (max-width: 2000px) { /* screen size until 1200px */
    img {
      height: 20rem;
    }
  }
  @media all and (max-width: 1000px) { /* screen size until 1000px */
    img {
      height: 15rem;
    }
  }
  @media all and (max-width: 450px) { /* screen size until 500px */
    img {
      height: 11rem;
    }
    .message {
      font-size: 1.5rem;
    }
    .title {
      margin: 0;
    }
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
      <Box className='col-sm-12 col-md-4'>
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
