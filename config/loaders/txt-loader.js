"use strict";
const { getOptions } = require("loader-utils");

function splitStr(source) {
  console.log('嘿嘿', source)
  const options = getOptions(this)
  const {type = ''} = options
  return `export default (${JSON.stringify(source.split(type))})`;
}
module.exports = splitStr