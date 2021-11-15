const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () => {
  gulp.src('/public/imagenes/*').pipe(imagemin()).pipe(gulp.dest('/public/imagenes/'));
});
