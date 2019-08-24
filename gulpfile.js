var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
return gulp.src(['./**/*.ts', '!./node_modules/**/*.ts'])
.pipe(ts({
    noImplicitAny: true,
    outFile: 'msPlayer.js'
}))
.pipe(gulp.dest('built/local'));
});