import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'

render(<App />, document.getElementById('root'))


if (module.hot) {
  module.hot.accept(['./App'], () => {
    let App= require('./App').default;  
    render(<App/>, document.getElementById('root'));
  });
}