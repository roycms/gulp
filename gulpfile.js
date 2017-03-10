var gulp = require('gulp');
var uglify = require('gulp-uglify');  //加载js压缩

// 定义一个任务 compass
gulp.task('uglify', function () {
    gulp.src(['js/*.js','!js/*.min.js'])  //获取文件，同时过滤掉.min.js文件
        .pipe(uglify())
        .pipe(gulp.dest('javascript/'));  //输出文件
});





gulp.task('default',['uglify'], function() {
  // 将你的默认的任务代码放在这
});
