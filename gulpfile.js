const gulp = require("gulp");
const sass = require("gulp-sass");

/*
  generate the css with sass
*/
gulp.task('css', function() {
  return gulp.src('./src/scss/main.scss', {sourcemaps: true})
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('_site/css'));
});


gulp.task('js', function() {
  return gulp.src("./src/js/**/*.js")
    .pipe(gulp.dest('_site/js'));
});



/*
  Watch folders for changes
*/
gulp.task("watch", function() {
  gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
});


/*
  Let's build this sucker.
*/
gulp.task('build', gulp.parallel(
  'js'
));