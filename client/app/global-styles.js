import { injectGlobal } from 'styled-components';
import Brandon from './Brandon.otf';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  @font-face {
    font-family: 'Brandon';
    src: url(${Brandon});
  }

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
    background-color: #406ba0;
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3 {
    font-family: 'Brandon', 'Helvetica Neue', Helvetica, Arial, sans-serif
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
    font-size: 24px;
    left: 6px;
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
    a {
      color: #62c5b1
    }
  }

  .issue_card {
    width: 90%;
  }
`;
