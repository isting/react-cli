import React, { Component } from 'react'
import './css/css.less';
import './css/style.css';
import A from './index.ts'
import TestJson from './json/test.json'

 class App extends Component {
  componentDidMount() {
    console.log(A)
    console.error(TestJson)
  }
  render() {
    return (
      <div>
        <div className="title">
          hello world!  [这里是个表情]
        </div>
        O(∩_∩)O哈哈~
      </div>
    )
  }
}

export default App