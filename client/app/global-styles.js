import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .bottom-row {
    margin-bottom: 10rem;
  }

  .main {
    background-color: #2f3b97;
    color: #ffffff;
    text-align: center;
    padding: 1rem;
    input, select {
      background-color: #ffffff;
      margin: 7px;
      color: black;
    }
  }

  .issue_card {
    width: 90%;
  }
`;
