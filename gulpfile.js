var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

gulp.task('build', ['uglify-js', 'minify-css'], function() {
    console.log('DONE !');
});

gulp.task('concat-scripts', function() {
    return gulp.src(['./web/assets/js/prism.js','./web/assets/js/sweetalert.min.js','./web/assets/js/rrssb.min.js','./web/assets/js/app.js'])
        .pipe(concat('production.js'))
        .pipe(gulp.dest('./web/assets/js/production/'));
});

gulp.task('concat-css', function() {
    return gulp.src(['./assets/css/main.css', './assets/css/bootstrap.min.css', './assets/css/font-awesome.min.css' , './assets/css/timeline.css','./assets/css/rrssb.css', './assets/css/new-age.css'])
        .pipe(concat('production.css'))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('uglify-js', ['concat-scripts'] , function() {
    return gulp.src('./web/assets/js/production/production.js')
        .pipe(uglify())
        .pipe(rename('production.min.js'))
        .pipe(gulp.dest('./web/assets/js/production/'));
});

gulp.task('minify-css', () => {
  return gulp.src('./assets/css/production.css')
    .pipe(cleanCSS())
    .pipe(rename('production.min.css'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('compress-images', function () {
    return gulp.src('./web/assets/images/products/*.jpg')
        .pipe(imageminJpegRecompress({loops: 6, quality:'medium', target:0.60})())
        .pipe(gulp.dest('./web/assets/images/products/compressed'));
});