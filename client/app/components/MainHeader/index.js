import React from 'react';
import styled from 'styled-components';

import Social from '../Social';
import Logo from '../Logo';

const HeaderBar = styled.div`
  .social {
    float: right
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
