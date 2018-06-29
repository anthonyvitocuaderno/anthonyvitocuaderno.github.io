var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    //script paths
    var jsFiles = './js/assets/*.js',
        jsDest = './js';

    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(jsDest));
});

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {
  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'))

  // fontawesome
  gulp.src([
      './node_modules/font-awesome/css/*',
      './node_modules/font-awesome/fonts/*'
    ])
    .pipe(gulp.dest('./vendor/fontawesome/css'))
  gulp.src([
      './node_modules/font-awesome/fonts/*',
    ])
    .pipe(gulp.dest('./vendor/fontawesome/fonts'))

  gulp.src([
      './node_modules/animate.css/animate.min.css',
    ])
    .pipe(gulp.dest('./vendor/animate.css'))
})

// Compiles Sass css
gulp.task('sass', function() {
  gulp.src('./css/app.sass')
  .pipe(sass({style: 'expanded'}))
  .pipe(gulp.dest('./css'))
});

// Default task
gulp.task('default', ['vendor', 'sass', 'scripts']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});



// Dev task
gulp.task('dev', ['browserSync'], function() {
  gulp.watch('./css/*.sass', function() {
    gulp.start('sass')
  });
  gulp.watch('./js/assets/*.js', function() {
    gulp.start('scripts')
  });
  gulp.watch('./js/*.js', browserSync.reload);
  gulp.watch('./css/*.css', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
});
