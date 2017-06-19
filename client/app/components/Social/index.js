import React from 'react';
import components from './components';
import Img from '../Img';
import styled from 'styled-components';

const SocialBox = styled.span`
  background-colour: #ffffff;
  margin: 0 2rem;
  @media all and (max-width: 2000px) { /* screen size until 1200px */
    .social_image {
      height: 11rem;
    }
  }
  @media all and (max-width: 1000px) { /* screen size until 1000px */
    .social_image {
      height: 7rem;
    }
  }
  @media all and (max-width: 750px) { /* screen size until 500px */
    .social_image {
      height: 4.5rem;
    }
  }
`;

function Social(props) {
  return (
    <SocialBox>
      <a href={components[props.type]['url']}>
        <Img src={components[props.type]['img']} alt={props.type} className='social_image' />
      </a>
    </SocialBox>
  );
}

export default Social;
