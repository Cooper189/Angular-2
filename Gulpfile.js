var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
 
// gulp.task('scripts', function () {
//     return gulp.src('app/**/*.ts')
//         .pipe(ts({
//             noImplicitAny: true,
//             outFile: 'app.js'
//         }))
//         .pipe(gulp.dest('built/local'));
// });

gulp.task('scripts', function() {
    var tsResult = gulp.src("app/**/*.ts") // or tsProject.src() 
        .pipe(tsProject());
 
    return tsResult.js.pipe(gulp.dest('release'));
});