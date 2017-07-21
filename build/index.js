var gulp = require('gulp');
var babel = require('gulp-babel');
var wxss = require('./wxss');
var alias = require('./alias');
var del = require('del');

var jsPath = './src/**/*.js'
var cssPath = './src/**/*.wxss'
var otherPath = './src/**/*.!(js|wxss)'

gulp.task('js', function () {
  return gulp.src(jsPath)
             .pipe(alias({
               '@': './',
               'apis': './apis',
               'axe': './modules/axe/index.js',
               'redux': './modules/redux/index.js',
               'utils': './utils/index.js',
               'templates': './templates',
               // 'store': './store',
               'actions': './store/actions/index.js',
             }))
             .pipe(gulp.dest('./dist'))
});

gulp.task('wxss', function () {
  return gulp.src(cssPath)
             .pipe(wxss())
             .pipe(gulp.dest('./dist'))
});

gulp.task('other', function () {
  return gulp.src(otherPath)
             .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['js', 'wxss', 'other']);

gulp.task('dev', ['default'], function () {
  gulp.watch(jsPath, ['js'])
  gulp.watch(cssPath, ['wxss'])
  gulp.watch(otherPath, ['other'])
})

gulp.task('build', function () {
  del.sync('./dist');
  gulp.run(['default'])
})
