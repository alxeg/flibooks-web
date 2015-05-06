// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');

// tasks
gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('serve', function () {
  connect.server({
        root: 'app/',
        port: 8800,
        middleware: function(connect, o) {
            return [ (function() {
                var url = require('url');
                var proxy = require('proxy-middleware');
                var options = url.parse('http://localhost:8000');
                options.route = '/api';
                return proxy(options);
            })()];
        }
    });
});

// default task
gulp.task('default',
  ['lint', 'serve']
);

