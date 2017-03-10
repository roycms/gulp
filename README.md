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

## Gulp 常用插件讲解 [doc](demo.md)

* gulp-uglify （JS压缩） [doc](demo.md)
* gulp-minify-css（CSS压缩）[doc](demo.md)
* gulp-minify-html（html压缩）[doc](demo.md)
* gulp-jshint（JS代码检查）[doc](demo.md)
* gulp-concat（文件合并）[doc](demo.md)
* gulp-less（编译Less）[doc](demo.md)
* gulp-sass（编译Sass）[doc](demo.md)
* gulp-imagemin（压缩图片）[doc](demo.md)
* gulp-livereload（自动刷新）[doc](demo.md)

## Gulp 文档资源地址及拓展阅读

* gulp 安装 [link](install.md)
* gulp 官方网站 [link](http://gulpjs.com/)
* gulp 插件资源地址 [link](http://gulpjs.com/plugins/)
* gulp 中文站点  [link](http://www.gulpjs.com.cn/)

http://www.w3ctech.com/topic/134
前端最小化文件
http://stackoverflow.com/questions/26719884/gulp-minify-multiple-js-files-to-one
https://www.npmjs.com/package/gulp-minify-html
https://www.npmjs.com/package/gulp-minify-css
最佳实例
http://ju.outofmemory.cn/entry/140033
http://www.techug.com/gulp
http://www.gulpjs.com.cn/docs/writing-a-plugin/中文官网
https://www.npmjs.com/package/gulp-inject-string
https://github.com/stevelacy/gulp-git
http://www.cnblogs.com/2050/p/4198792.html  

匹配语法
* js/app.js 精确匹配文件
* js/*.js 仅匹配js目录下的所有后缀为.js的文件
* js/*/.js 匹配js目录及其子目录下所有后缀为.js的文件
* !js/app.js 从匹配结果中排除js/app.js，这种方法在你想要匹配除了特殊文件之外的所有文件时非常管用
* *.+(js|css) 匹配根目录下所有后缀为.js或者.css的文件

http://www.cnblogs.com/2050/p/4198792.html

