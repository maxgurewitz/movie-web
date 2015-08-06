var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var sass = require('gulp-sass');

gulp.task('browserify', function() {
  return browserify({
       entries: __dirname + '/src/client/app.js',
       transform: [reactify]
     })
    .bundle()
    .pipe(source('appBundle.js'))
    .pipe(gulp.dest(__dirname + '/public/js/'));
});

gulp.task('scss', function() {
  var sassStream = sass({
    style: 'compressed',
    includePaths: [
      __dirname + '/src/scss/',
      __dirname + '/node_modules/bootstrap-sass/assets/stylesheets/'
    ]})
    .on('error', sass.logError)

  gulp.src(__dirname + '/src/scss/base.scss')
    .pipe(sassStream)
    .pipe(gulp.dest(__dirname + '/public/css'));
});

gulp.task('watch', function() {
  gulp.watch(__dirname + '/src/client/**/*', ['browserify']);
  gulp.watch(__dirname + '/assets/scss/**/*.scss', ['scss']);
});

gulp.task('start', ['browserify', 'scss', 'watch'], function() {
  nodemon({
    watch: __dirname + '/src/app/',
    script: __dirname + '/scripts/server.js',
    ext: 'js ejs jsx json',
    watch: __dirname + '/src/app/',
    env: { 'NODE_ENV': 'development' }
  });
});
