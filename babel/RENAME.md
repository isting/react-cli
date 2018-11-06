 - 新版的babel-cli 为   @babel/cli   V7.*
 - babel-node 支持ES6所有内容，如果当前环境不支持  可以在babel-node下执行



 插件：
  - babel-cli: babel cli 全局安装后可以直接进行babel内容转化，自带babel-node。最新版本@babel/cli
  - babel-preset-latest: babel 最新转码规则
  - babel-preset-env: 上面一个囊括所有的新特性，加载慢，这个它可以根据开发者的配置，按需加载插件
  - babel-preset-react: react 转码规则
  - babel-preset-stage-0: (0-3)es新特性要经过四个阶段才可以发布，这里对应不同阶段语法提案的转码规则
  - babel-register: 对于require进来的js文件进行转码，实时转码，只适用开发环境使用
  - babel-core: 某些代码需要babel的API进行转码 require("babel-core").transfrom('需要转换',{"转化配置"}, function回调)新版 @babel/core
  - babel-polyfill: babel仅仅转化句法，并不转换新的api如(Iterator 、
Generator 、 Set 、 Maps 、 Proxy 、 Reflect 、 Symbol 、 Promise 等全局对象) 在根目录引入即可