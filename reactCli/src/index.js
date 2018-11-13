import React from 'react'
import { render } from 'react-dom'
import './css/css.less';
import App from './App.jsx'
// import './css/style.css';
// const hello = require('./hello');
// document.getElementById('root').appendChild(hello())


if(module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('root'))