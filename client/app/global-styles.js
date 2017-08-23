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

  .big_checkbox {
    -webkit-appearance: none;
    background-color: #fafafa;
    border: 1px solid #cacece;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    height: 3.2rem;
    width: 3.2rem;
    margin: 0 auto;
    float: left;
  }

  .big_checkbox:checked {
    background-color: #e9ecee;
    border: 1px solid #adb8c0;
    color: #5990b9;
  }

  .big_checkbox:checked:after {
    content: '✔';
    position: absolute;
    top: 0px;
    font-size: 28px;
    left: 6px;
  }

  .bottom-row {
    margin-bottom: 10rem;
  }

  .main {
    background-color: #406ba0;
    color: #ffffff;
    text-align: center;
    padding: 1rem;
    min-height: 50rem;
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
