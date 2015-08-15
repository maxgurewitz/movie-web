var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

gulp.task('browserify', function() {
  return browserify({
       entries: __dirname + '/src/client/main.js',
       transform: [reactify]
     })
    .bundle()
    .pipe(source('appBundle.js'))
    .pipe(gulp.dest(__dirname + '/public/js/'));
});

gulp.task('startPg', shell.task(['postgres -D /usr/local/var/postgres']));

gulp.task('scss', function() {
  var sassStream = sass({
    style: 'compressed',
    includePaths: [
      __dirname + '/assets/scss/',
      __dirname + '/node_modules/bootstrap-sass/assets/stylesheets/'
    ]})
    .on('error', sass.logError)

  gulp.src(__dirname + '/assets/scss/base.scss')
    .pipe(sassStream)
    .pipe(gulp.dest(__dirname + '/public/css'));
});

gulp.task('watch', function() {
  gulp.watch(__dirname + '/src/client/**/*', ['browserify']);
  gulp.watch(__dirname + '/assets/scss/**/*.scss', ['scss']);
});

gulp.task('build', ['browserify', 'scss']);

gulp.task('startApp', ['build', 'watch'], function() {
  nodemon({
    watch: __dirname + '/src/app/',
    script: __dirname + '/scripts/server.js',
    ext: 'js ejs jsx json',
    watch: __dirname + '/src/app/',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('start', ['startApp', 'startPg']);
