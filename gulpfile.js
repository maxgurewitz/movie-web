var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function () {
  nodemon({
    watch: __dirname + '/src/app/',
    script: __dirname + '/scripts/server.js',
    ext: 'js ejs jsx',
    watch: __dirname + '/src/app/',
    env: { 'NODE_ENV': 'development' }
  });
});
