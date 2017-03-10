# 入门指南

#### 1. 全局安装 gulp：

```sh
$ npm install --global gulp
```

#### 2. 作为项目的开发依赖（devDependencies）安装：

```sh
$ npm install --save-dev gulp
```

#### 3. 在项目根目录下创建一个名为 `gulpfile.js` 的文件：

```js
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```

#### 4. 运行 gulp：

```sh
$ gulp
```

默认的名为 default 的任务（task）将会被运行，在这里，这个任务并未做任何事情。

想要单独执行特定的任务（task），请输入 `gulp <task> <othertask>`。

## 下一步做什么呢？

你已经安装了所有必要的东西，并且拥有了一个空的 gulpfile。那怎样才算是__真的__入门了呢？你可以去官方的插件库区看看，那些插件都能给你带来什么帮助，在 [主站](http://gulpjs.com/plugins/) 上可以查看完整的列表。

