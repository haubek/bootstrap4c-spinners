var gulp                = require('gulp');
var concat              = require('gulp-concat');
var plumber             = require('gulp-plumber');
var autoprefixer        = require('gulp-autoprefixer');
var sass                = require('gulp-sass');
var rename              = require("gulp-rename");
var cleanCSS            = require('gulp-clean-css');
var stripCssComments    = require('gulp-strip-css-comments');
var stripDebug          = require('gulp-strip-debug');
var uglify              = require('gulp-uglify');

var scriptfiles   =  [
  './src/scripts/bootstrap4c-spinners.js',
];

gulp.task('build', function() {
  gulp.src(['./src/scss/build.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(rename("component-spinners.css"))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(stripCssComments({all: true}))
    .pipe(rename("component-spinners.min.css"))
    .pipe(gulp.dest('./dist/css/'));
  gulp.src(scriptfiles)
    .pipe(concat('component-spinners.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename("component-spinners.min.js"))
    .pipe(gulp.dest('./dist/js/'));
});
