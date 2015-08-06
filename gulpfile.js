var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('browserify', function() {
  return browserify(__dirname + '/src/client/app.js')
    .bundle()
    .pipe(source('appBundle.js'))
    .pipe(gulp.dest(__dirname + '/public/js/'));
});

gulp.task('start', function() {
  nodemon({
    watch: __dirname + '/src/app/',
    script: __dirname + '/scripts/server.js',
    ext: 'js ejs jsx',
    watch: __dirname + '/src/app/',
    env: { 'NODE_ENV': 'development' }
  });
});
