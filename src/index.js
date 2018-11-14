import React from 'react'
import { render } from 'react-dom'
import './css/css.less';
import './css/style.css';
import App from './App.jsx'
// const hello = require('./hello');
// document.getElementById('root').appendChild(hello())


if(module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('root'))