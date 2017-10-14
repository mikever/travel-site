var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', () => {
    gulp.start('icons');
    gulp.start('styles');
    gulp.start('scripts');

    browserSync.init({
      notify: false,
      server: {
        baseDir: "app"
    }
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });

});

gulp.task('cssInject', ['styles'], () => {
  gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});


gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});
