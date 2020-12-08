const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps')
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');


/*
  generate the css with sass
*/
gulp.task('css', function() {
  return gulp.src('./src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(postcss([
      tailwindcss(),
      autoprefixer(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('_site/css'));
}); 



gulp.task('style', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer'),
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('_site/css'));
});

gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('_site/js'));
}); 

//Watch task
gulp.task('watch',function() {
    gulp.watch('src/scss/**/*.scss',gulp.parallel('css'));
    gulp.watch('src/js/*.js',gulp.parallel('js'));
});
