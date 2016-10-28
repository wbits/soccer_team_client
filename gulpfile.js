'use strict';

var gulp        = require('gulp'),
    babelify    = require('babelify'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream');

gulp.task('build', function () {
    browserify({
        entries: './app/main.js',
        debug: true
    })
    .transform(babelify, {presets: ["react"]})
    .bundle()
    .pipe(source('app.bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function () {
    gulp.src('index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('**/*.js', ['build']);
    gulp.watch('*.html', ['copy']);
});

gulp.task('default', ['copy', 'build', 'watch']);