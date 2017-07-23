import React from 'react';
import Img from 'components/Img';
import LogoImg from './logo.jpg';
import styled from 'styled-components';
import LogoText from 'components/LogoText';

const Jumbotron = styled.div`
  background-image: url(${LogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: ${props => props.large ? 85 :65}%
  padding-top: 25%;
  padding-bottom: 0%;
  margin: auto;
  margin-bottom: ${props => props.large ? 'auto' : '-6rem'};
  display: block;
  background-color: #ffffff;
`;

function Logo(props) {
  return (
    <div>
      <Jumbotron large={props.large}>
        {props.large && <LogoText />}
        </Jumbotron>
      </div>
  )
}

Logo.propTypes = {

};

export default Logo;
