import React from 'react';

import A from 'components/A';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <section>
        <p>Questions? Email us at <A href="mailto:contact@postcardsforchange.net" target="_blank">contact@postcardsforchange.net</A></p>
      </section>
      <section>
        <p>Made with love by <A href="https://twitter.com/kabibster" target="_blank">Kamilla K</A></p>
      </section>
    </Wrapper>
  );
}

export default Footer;
