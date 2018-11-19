import React, { Component } from 'react'
import './css/css.less';
import './css/style.css';
import A from './index.ts'

 class App extends Component {
  componentDidMount() {
    console.log(A)
  }
  render() {
    return (
      <div>
        <div className="title">
          hello world!
        </div>
      </div>
    )
  }
}

export default App