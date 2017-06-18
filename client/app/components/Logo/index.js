import React from 'react';
import Img from 'components/Img';
import LogoImg from './logo.jpg';
import styled from 'styled-components';
import LogoText from 'components/LogoText';

const Jumbotron = styled.div`
  background-image: url(${LogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 33.333%;
  padding-bottom: 0%;
  display: block;
  background-color: #ffffff;
`;

class Logo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Jumbotron>
        <LogoText />
        </Jumbotron>
      </div>
    );
  }
}

Logo.propTypes = {

};

export default Logo;
