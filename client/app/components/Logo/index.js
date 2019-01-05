import React from 'react';
import Img from 'components/Img';
import LogoImg from './logo.jpg';

function Logo(props) {
  return (
    <div>
      <a href='/issues'>
        <Img src={LogoImg} alt='' />
      </a>
    </div>
  )
}

Logo.propTypes = {

};

export default Logo;
