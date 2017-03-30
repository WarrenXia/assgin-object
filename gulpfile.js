var gulp = require('gulp');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var moment = require('moment');
var pkg = require('./package.json');

let timestamp = Date.now();
let time = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');

var headerStr = '/* version: ' + pkg.version + ' | author: ' + pkg.author + ' | license: ' + pkg.license + ' | github: ' + pkg.repository.url + ' | Date: ' + time + ' */\n';

gulp.task('dist', function() {
  gulp.src('./src/*.js').pipe(header(headerStr)).pipe(gulp.dest('./dist/'));
});

gulp.task('min', function() {
  gulp.src('./src/*.js').pipe(uglify()).pipe(header(headerStr)).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./dist/'));
});

gulp.task('default', [
  'dist', 'min'
], function() {
  console.log('build success!');
});
