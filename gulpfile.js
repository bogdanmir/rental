'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('sass/**/*.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
});

