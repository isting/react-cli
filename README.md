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
  - babel-plugin-transform-runtime 和 babel-polyfill 效果一致
  > 直接用babel-polyfill会有一些坑，第一个坑是污染全局环境，比如说低版本浏览器没有Set，但是babel-polyfill会在全局变量里加一个Set。再一个问题是，会造成代码冗余，举个例子，多个模块用到Promise，每个模块里都有可能独立存在一个对Promise做兼容性的代码。所以，使用babel-polyfill可以解决兼容性问题，但并不是最佳方案



  <!-- babel7 -->
  <!-- 目录 demo 整理 -->
  <!-- 整理常用插件 loader plugin-->
  <!-- 优化 -->
  <!-- ts loader -->
  <!-- optimization  -->
  <!-- hui、react -->
  <!-- 写一个loader -->
  <!-- ssr -->
  <!-- eslint -->
<!-- 跨域反向代理 -->
<!-- ico -->
<!-- node启动；了解下 -->
  <hr />

  <!-- github汲取经验 -->
  <!-- https://juejin.im/post/5bd66efcf265da0a8a6af2d2#heading-29 -->
  <!-- https://webpack.wuhaolin.cn/2%E9%85%8D%E7%BD%AE/2-7%E5%85%B6%E5%AE%83%E9%85%8D%E7%BD%AE%E9%A1%B9.html -->

  <!-- https://juejin.im/post/5be64a7bf265da615304493e#heading-2 -->
  <!-- https://juejin.im/post/5b56909a518825195f499806 -->
  <!-- https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc -->
<!-- https://github.com/PanJiaChen/vue-element-admin/blob/master/build/webpack.prod.conf.js -->

  <!-- react@16.7.0-alpha.2 -->
  <!-- react-dom@16.7.0-alpha.2 -->

  <!-- react新版本 -->

  <!-- 发现问题 -->
  <!-- css不会热更新 -->