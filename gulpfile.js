var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('js', function() {
  var src = [
    'js/**/*.js'
  ];

  gulp.src(src)
    .pipe(babel({
      "presets": ["es2015"]
    }))
    .pipe(gulp.dest("src"));
});
