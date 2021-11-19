import gulp from 'gulp';
import pngquant from 'imagemin-pngquant';
import imagemin from 'gulp-imagemin';

gulp.task('imagemin', () => {
	gulp
		.src('/public/imagenes/*')
		.pipe(imagemin([pngquant({ quality: '40' })]))
		.pipe(gulp.dest('/public/imagenes/'));
});
