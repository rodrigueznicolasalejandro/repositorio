/*
* Dependencias
*/
var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');
/*
* Configuración de las tareas 'demo'
*/
gulp.task('minjs', function () {
	gulp.src('js/source/*.js')
	.pipe(concat('compilacion.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js/build/'))
});

var cleanCSS = require('gulp-clean-css');

gulp.task('mincss', function() {
  return gulp.src('css/source/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('compilacion.css'))
    .pipe(gulp.dest('css/build/'));
});

var htmlmin = require('gulp-htmlmin');

gulp.task('minhtml', function() {
  return gulp.src('html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(''));
});