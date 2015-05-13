// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');

// tasks
gulp.task('lint', function() {
    gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('minify',
    shell.task([
        'r.js -o build.js'
    ])
);

gulp.task('dist', ['minify'], function() {
    gulp.src([
            './app/**/*.css',
            './app/**/*.html',
            './app/**/*.svg',
            './app/**/*.png',
            './app/**/require.js'
        ], {
            base: './app'
        })
        .pipe(gulp.dest('dist'));
});


gulp.task('serve', function() {
    connect.server({
        root: 'app/',
        port: 8800,
        middleware: function(connect, o) {
            return [(function() {
                var url = require('url');
                var proxy = require('proxy-middleware');
                var options = url.parse('http://localhost:8000');
                options.route = '/api';
                return proxy(options);
            })()];
        }
    });
});

gulp.task('serve-dist', function() {
    connect.server({
        root: 'dist/',
        port: 8800,
        middleware: function(connect, o) {
            return [(function() {
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
gulp.task('default', ['lint', 'serve']);
