/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';


const theme = {
  main_blue: '#2F3B97',
  main_red: '#ef463d',
  main_turqouise: '#64c5b2',
  main_white: '#ffffff'
};

const AppWrapper = styled.div`
  @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css?family=Lato:400,700i,900i');
  }
  font-family: 'Lato', sans-serif;
  background-color: '#FFFFFF';
  font-size: 16px;

  @media all and (max-width: 1200px) { /* screen size until 1200px */
    font-size: 16px; /* 1.5x default size */
  }
  @media all and (max-width: 1000px) { /* screen size until 1000px */
    font-size: 12px; /* 1.2x default size */
  }
  @media all and (max-width: 750px) { /* screen size until 500px */
    font-size: 10px; /* 0.8x default size */
  }
`;

export function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application' },
          ]}
        />
        {React.Children.toArray(props.children)}
      </AppWrapper>
    </ThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
