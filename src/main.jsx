import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  :root {
    --main-color: #1FC34D;
    --secondary-color: #E2F7E8;
    --hover-color: #1BAC44;
    --error-color: #C21F81;
    --error-light-color: #F9E9F3;
    --text-color: #242527;
    --semi-grey-color: #3A3B3D;
    --grey-color: #707377;
    --light-grey-color: #B4B9BF;
    --lightest-grey-color: #EEF2F6;
    overflow-x: hidden;

  }

  /* Reset and base styles  */
* {
  margin: 0;
  padding: 0;
  border: none;
  font-family: Barlow;
}

body {
  color: var(--text-color);
  background-color: #ffffff;
  overflow: hidden
}

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgb(255 255 255 / 0%);
  -webkit-tap-highlight-color: transparent;
}

/* Links */

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

/* Common */

aside,
nav,
footer,
header,
section,
main {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: inherit;
  font-size: inherit;
}

ul,
ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

img,
svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

/* Form */

input,
textarea,
button,
select {
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

button,
input[type="submit"] {
  display: inline-block;
  background: none;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
}
input[type="radio"] {
  display: none;
}

input:focus,
input:active,
button:focus,
button:active {
  outline: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
);
