var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('start', ['html', 'styles'], function () {
    connect.server({
        root: 'public'
    });
});

gulp.task('styles', function () {
    gulp.src('./dev/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(connect.reload())
})

gulp.task('js', function () {
    gulp.src('./dev/js/**/*.js')
        .pipe(gulp.dest('./public/js'))
        .pipe(connect.reload())
})

gulp.task('pics', function () {
    gulp.src('./dev/img')
        .pipe(gulp.dest('./public/img'))
        .pipe(connect.reload())
})

gulp.task('html', function () {
    gulp.src('./dev/*.html')
        .pipe(gulp.dest('./public'))
        .pipe(connect.reload())
})

gulp.task('watch', function () {
    gulp.watch('./dev/scss/**/*.scss', ['styles']);
    gulp.watch('./dev/js/**/*.js', ['js']);
    gulp.watch('./dev/img', ['pics']);
    gulp.watch('./dev/*.html', ['html']);
})

gulp.task('default', ['start', 'watch']);