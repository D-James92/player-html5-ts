var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
return gulp.src('./**/*.ts')
.pipe(ts({
    noImplicitAny: true,
    outFile: 'playerMS.js'
}))
.pipe(gulp.dest('built/local'));
});