//points to 3 third party libraries
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

// .task for gulp to run, 2 arguments, 'default' to and then to run 'lint' and run 'watch'
gulp.task('default', ['lint', 'watch']);
// .task called 'watch' and then run this function... watch - monitors whatever you tell it to
//and then runs task you tell it to run. Watch keeps monitoring in background
gulp.task('watch', function() {
  gulp.watch('./js/**/*.js', ['lint']); //goes into javascripts folder, anything nested
});                                              //any file with .js on it - run 'lint'

gulp.task('lint', function() {          //'lint' task and what it will do
  return gulp.src('./js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});