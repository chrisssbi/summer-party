'use strict'

let gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src('./assets/less/**/*.less')  // return gulp.src('./assets/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});