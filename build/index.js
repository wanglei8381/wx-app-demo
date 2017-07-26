var gulp = require('gulp');
var px2rpx = require('./gulp-px2rpx');
var alias = require('./gulp-alias');
var watch = require('./watch');
var del = require('del');
var config = require('./config');

var jsPath = './src/**/*.js'
var cssPath = './src/**/*.wxss'
var otherPath = './src/**/*.!(js|wxss)'

gulp.task('js', function () {
  return gulp.src(jsPath)
             .pipe(watch(jsPath))
             .pipe(alias(config.alias))
             .pipe(gulp.dest('./dist'))
});

gulp.task('wxss', function () {
  return gulp.src(cssPath)
             .pipe(watch(cssPath))
             .pipe(px2rpx())
             .pipe(gulp.dest('./dist'))
});

gulp.task('other', function () {
  return gulp.src(otherPath)
             .pipe(watch(otherPath))
             .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['js', 'wxss', 'other']);

gulp.task('dev', ['default'])

gulp.task('build', function () {
  del.sync('./dist');
  gulp.run(['default'])
})
