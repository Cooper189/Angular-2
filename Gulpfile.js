var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sass = require('gulp-sass');
 
gulp.task('scripts', function() {
    var tsResult = gulp.src("app/**/*.ts") // or tsProject.src() 
        .pipe(tsProject());
 
    return tsResult.js.pipe(gulp.dest('release'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./release/css'));
});

gulp.task('watch', function () {
    gulp.watch(["app/**/*.ts"], ['scripts']);
    gulp.watch(["sass/**/*.scss"], ['sass']);
});