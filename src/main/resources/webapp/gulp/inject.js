'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

gulp.task('inject', ['styles'], function () {
    var services = gulp.config.mock ? '!**/services.js' : '!**/servicesMock.js';
    var injectStyles = gulp.src([
        paths.tmp + '/serve/**/*.css',
        '!' + paths.tmp + '/serve/styles/vendor.css'
    ], {read: false});

    var injectScripts = gulp.src([
            paths.src + '/app/**/*.js',
            '!' + paths.src + '/app/**/*.spec.js',
            '!' + paths.src + '/app/**/*.mock.js',
            services
        ])
        .pipe($.angularFilesort());

    var injectOptions = {
        ignorePath: [paths.src, paths.tmp + '/serve'],
        addRootSlash: false
    };

    var wiredepOptions = {
        directory: 'bower_components',
        exclude: [/bootstrap\.css/, /foundation\.css/]
    };

    return gulp.src([paths.src + '/*.html', '!' + paths.src + '/debug.html'])
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep(wiredepOptions))
        .pipe(gulp.dest(paths.tmp + '/serve'));

});