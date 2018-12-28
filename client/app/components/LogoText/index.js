/**
*
* LogoText
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const LogoStyle = styled.div`
  background-color: #ffffff;
  color: ${props => props.theme.main_blue};
  text-align: center;
  padding: 0 18px;
  display: block;

  @media all and (max-width: 2000px) { /* screen size until 1200px */
    font-size: 3.3rem; /* 1.5x default size */
  }
  @media all and (max-width: 1000px) { /* screen size until 1000px */
    font-size: 2.0em; /* 1.2x default size */
  }
  @media all and (max-width: 750px) { /* screen size until 500px */
    font-size: 1.5rem; /* 0.8x default size */
  }
`;

function LogoText() {
  return (
    <LogoStyle className="row">
      <div className="col-sm-12">
        <strong><em><FormattedMessage {...messages.logoText} /></em></strong>
      </div>
    </LogoStyle>
  );
}

LogoText.propTypes = {

};

export default LogoText;
