/**
*
* Button
*
*/

import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  -webkit-border-radius: 30;
  -moz-border-radius: 30;
  border-radius: 30px;
  font-family: Arial;
  color: #ffffff;
  font-size: 15px;
  background: #3498db;
  padding: 5px 10px 5px 10px;
  text-decoration: none;

 :hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
`;

export default Button;
