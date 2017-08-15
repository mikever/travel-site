var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', () => {
  console.log("Hooray, you created a gulp task.");
});

gulp.task('html', () => {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', () => {
  console.log("Imagine Sass or PostCss tasks running here.");
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
