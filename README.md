# gulp前端构建工具讲义

## 什么是构建系统？

构建系统(build system)是用来从源代码生成用户可以使用的目标(targets)的自动化工具。
自动化工具。

## 前端有哪些构建需求？

* 预处理
        SASS LESS CoffeeScript Babel 等预处理 ECMA Script6 的兼容标准

* 风格与测试
        代码风格检测，单元测试

* 资源压缩
        CSS JS 文件合并压缩  -webkit- -moz- 前缀兼容性处理

* 静态资源的替换
        开发—>生产环境 需要更换URL地址以及CDN地址切换等自动化任务

## 前端那些构建工具？

* 任务管理工具 Gulp, Grunt
* 打包工具 webpack, FIS
* 构建工具  Make

## Gulp和Grunt 区别是什么？

Gulp 对文件的处理采用流式读取。

## Gulp 常用插件讲解 

* gulp-uglify （JS压缩） 
* gulp-minify-css（CSS压缩）
* gulp-minify-html（html压缩）
* gulp-jshint（JS代码检查）
* gulp-concat（文件合并）
* gulp-less（编译Less）
* gulp-sass（编译Sass）
* gulp-imagemin（压缩图片）
* gulp-livereload（自动刷新）

