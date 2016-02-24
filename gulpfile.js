var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

  gulp.task('styles', function () {
    gulp.src('./scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./css'))
      .pipe(notify({ message: 'Styles task complete' }));
  });

  /* prefix css */
  gulp.task('prefix', function () {
    return gulp.src('css/main.css')
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
      }))
      .pipe(gulp.dest('css/'))
      .pipe(livereload());
  });

  /* minify css output */
  gulp.task('minify-css', function() {
    return gulp.src('./css/main.css')
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('./css/'));
  });

  gulp.task('browserify', function() {
    return browserify('./js/main.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('main.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
  });

  /* Uglify scripts */
  gulp.task('uglify', function() {
    return gulp.src(['./build/main.js'])
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest('./build/'))
      .pipe(notify({ message: 'JS tasks complete' }));
  });

  /* task for watching changed files to run tasks */
  gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./scss/**/*.scss', ['styles']);
    gulp.watch('./css/*.css', ['prefix','minify-css']);
    gulp.watch('./js/*.js', ['browserify']);
    gulp.watch(['./build/main.js' ], ['uglify']);
  });


gulp.task('default', ['watch']);
