import React from 'react';
import components from './components';
import Img from '../Img';
import styled from 'styled-components';

const SocialBox = styled.span`
  background-colour: #ffffff;
  margin: 0 ${props => props.small ? 0.5 : 1}rem;
  @media all and (max-width: 2000px) { /* screen size until 1200px */
    .social_image {
      height: ${props => props.small ? 6 : 11}rem;
    }
  }
  @media all and (max-width: 1000px) { /* screen size until 1000px */
    .social_image {
      height: ${props => props.small ? 4 : 7}rem;
    }
  }
  @media all and (max-width: 750px) { /* screen size until 500px */
    .social_image {
      height: ${props => props.small ? 2.5 : 3.5}rem;
      margin: 0;
    }
  }
`;

function Social(props) {
  return (
    <SocialBox small={props.small}>
      <a href={components[props.type]['url']}>
        <Img src={components[props.type]['img']} alt={props.type} className='social_image' />
      </a>
    </SocialBox>
  );
}

export default Social;
