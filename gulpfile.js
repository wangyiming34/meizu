// 压缩js文件
var gulp = require("gulp");
var uglify = require("gulp-uglify");

gulp.task("uglify", function() {
  return gulp
    .src("static/js/store.js")
    .pipe(uglify())
    .pipe(gulp.dest("dest/js"));
});

gulp.task("default", gulp.series("uglify"));

// var gulp = require('gulp');

// var uglify =require('gulp-uglify')

// gulp.task('uglify',function(){

// ​    return gulp.src('./static/js/un.js')

// ​    .pipe(uglify())

// ​    .pipe(gulp.dest('dest/js'))

// ​

// })

// gulp.task('default',gulp.series('uglify'))
