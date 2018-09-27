
var gulp = require('gulp');
var sass = require('gulp-sass');
var js = require('gulp-uglify');
var images = require('gulp-image');


gulp.task('sass', function() {
	return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function () {
  return gulp.src('./assets/js/*.js')
    .pipe(js())
    .pipe(gulp.dest('./assets/js/min'));
});

gulp.task('images', function () {
	return gulp.src('./assets/images/*')
	    .pipe(image())
			.pipe(gulp.dest('./assests/images'));
})

// This adds the task to the default gulp task, which means it will run with just the ‘gulp’ command
gulp.task('default', ['sass', 'js', 'images']);
