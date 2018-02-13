import React from 'react';
import styled from 'styled-components';

import Social from '../Social';
import Logo from '../Logo';

const HeaderBar = styled.div`
  background-color: #ffffff;
  height: 14rem;

  .social {
    float: right
  }

  @media all and (max-width: 850px) { /* screen size until 1000px */
    height: 7rem;
  }
  @media all and (max-width: 700px) { /* screen size until 1000px */
    height: 6rem;
  }
  @media all and (max-width: 600px) { /* screen size until 1000px */
    height: 5rem;
  }
  @media all and (max-width: 500px) { /* screen size until 500px */
    height: 4rem;
  }
`;

function MainHeader() {
  return (
    <HeaderBar>
      <div className='social'>
        <Social type='instagram' small />
        <Social type='twitter' small/>
        <Social type='facebook' small />
      </div>
      <Logo />
    </HeaderBar>
  );
}

MainHeader.propTypes = {

};

export default MainHeader;
