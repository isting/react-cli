"use strict";
// const { getOptions } = require("loader-utils");

function splitStr(source) {
  let newSource = source
  console.log('loader 参数', this.query)
  newSource = newSource.replace(/\[这里是个表情\]/g, (el, i, input) => {
    return '^_^!^_^'
  })
  return newSource
}
module.exports = splitStr

// test        正则.test(内容)  返回boolean
// exec 
// compile

// match 
// replace
// search
// split

// indexOf
// var reg3 = /\d(\w)\d/;
// var str = '1a2b3c4d5e';
// var arr = reg3.exec(str);
// console.log(reg3.lastIndex + '\t' + arr.index + '\t' + arr.toString());
