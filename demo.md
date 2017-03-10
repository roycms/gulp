# Gulp 常用插件讲解

* gulp-uglify （JS压缩） 
* gulp-minify-css（CSS压缩）
* gulp-minify-html（html压缩）
* gulp-jshint（JS代码检查）
* gulp-concat（文件合并）
* gulp-less（编译Less）
* gulp-sass（编译Sass）
* gulp-imagemin（压缩图片）
* gulp-livereload（自动刷新）

## gulp-uglify （JS压缩）
gulp-uglify安装:
```
npm install --save-dev gulp-uglify
```
gulp-uglify用来压缩js文件，使用的是uglify引擎。
```
var gulp = require('gulp');  //加载gulp
var uglify = require('gulp-uglify');  //加载js压缩

// 定义一个任务 compass
gulp.task('compass', function () {
    gulp.src(['js/*.js','!js/*.min.js'])  //获取文件，同时过滤掉.min.js文件
        .pipe(uglify())
        .pipe(gulp.dest('javascript/'));  //输出文件
});
```
小技巧，第二个参数'！js/*.min.js'是用来过滤掉后缀为min.js，！感叹号为排除模式。

## gulp-minify-css（CSS压缩）
gulp-minify-css安装：
```
npm install --save-dev gulp-minify-css
```
可以使用它来压缩CSS文件
```
var gulp = require('gulp');
var minify = require('gulp-minify-css');

gulp.task('cssmini', function () {
    gulp.src(['css/*.css', '!css/*.min.css'])  //要压缩的css
        .pipe(minify())
        .pipe(gulp.dest('buildcss/'));
});
```

## gulp-minify-html（html压缩）
gulp-minify-html安装：
```
npm install --save-dev gulp-minify-html
```
可以使用它来压缩html文件.
```
var gulp = require('gulp');
var htmlmini = require('gulp-minify-html');

gulp.task('htmlmini', function () {
    gulp.src('*.html')
        .pipe(htmlmini())
        .pipe(gulp.dest('minihtml'));
})
```

## gulp-jshint（JS代码检查）
gulp-jshint安装：
```
npm install --save-dev gulp-jshint
```
可以用来检查JS的代码
```
var gulp = require('gulp');
var jshint = require("gulp-jshint");

gulp.task('jsLint', function () {
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter()); // 输出检查结果
});
```
## gulp-concat（文件合并）
gulp-concat安装：
```
npm install --save-dev gulp-concat
```
合并CSS与JS文件，减少http请求。
```
var gulp = require('gulp');
var concat = require("gulp-concat");

gulp.task('concat', function () {
    gulp.src('js/*.js')  //要合并的文件
    .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
    .pipe(gulp.dest('dist/js'));
});
```

## gulp-less（编译Less）
gulp-less安装：
```
npm install --save-dev gulp-less
```
把less文件转换为css。
```
var gulp = require('gulp'),
    less = require("gulp-less");

gulp.task('compile-less', function () {
    gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});
```

## gulp-sass（编译Sass）
gulp-sass安装：
```
npm install --save-dev gulp-sass
```
把scss文件转换为sass文件。
```
var gulp = require('gulp'),
    sass = require("gulp-sass");

gulp.task('compile-sass', function () {
    gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});
```

## gulp-imagemin（压缩图片）
gulp-imagemin安装：
```
npm install --save-dev gulp-imagemin
```
可以使用gulp-imagemin的插件来压缩jpg、png、gif等图片。（imagemin也是有插件的，是基于imagemin产生的插件，所以前缀是imagenin开头）

压缩png插件-imagemin-pngquant安装：
```
$npm install--save-devimagemin-pngquant
```
gulpfile.js:
```
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); //png图片压缩插件

gulp.task('default', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('dist'));
});
```
gulp-imagemin的使用比较复杂一点，它本身也有很多插件（更多imagemin插件），这里只是简单介绍一下，要想压缩不同格式的图片，必须对应安装不同的插件，这里只安装了pngquant插件。按照nodejs的模块化思想，每个require只包含一个功能，这样就可以达到按需加载的目的。

## gulp-livereload（自动刷新）
gulp-livereload安装：
```
npm install --save-dev gulp-livereload
```
当代码变化时，它可以帮助我们自动刷新页面，该插件最好配合谷歌浏览器，且要安装livereload chrome extension扩展插件，否则无效。
```
var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen(); //要在这里调用listen()方法
  gulp.watch('less/*.less', ['less']);  //监听目录下的文件，若文件发生变化，则调用less任务。
});
```

## 结语

gulp插件基本介绍到这里结束了，每个插件的具体用法还需要大家去探索，细节问题会比较多，遇到问题时最好能去看下英文的API手册，这样使用起来更加方便。





