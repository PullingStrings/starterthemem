
var gulp 					= require('gulp');
var sass 					= require('gulp-sass');
const babel       = require('gulp-babel');
var js 						= require('gulp-uglify');
var images 				= require('gulp-image');
var browserSync 	= require('browser-sync').create();



gulp.task('sass', function() {
	return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function () {
  return gulp.src('./assets/js/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(js())
    .pipe(gulp.dest('./assets/js/min'));
});

gulp.task('images', function () {
	return gulp.src('./assets/images/*')
	    .pipe(images())
			.pipe(gulp.dest('./assets/images'));
});

gulp.task('serve', ['js', 'sass', 'images'], () => {
  browserSync.init({
    files: ['stylesheets/**/*.*'],
    browser: 'google chrome',
    port: 8888,
    reloadDelay: 500,
    server: { baseDir: './starterthemem/stylesheets' }
  });
});

gulp.task('default', ['sass', 'js','images', 'serve'], () => {
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch('assets/js/**/*.js', ['es6']);
});

// This adds the task to the default gulp task, which means it will run with just the ‘gulp’ command
// gulp.task('default', ['sass', 'js', 'images']);
