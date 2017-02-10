/// <binding BeforeBuild='build' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require("del"),
    path = require("path"),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    sourcemaps = require('gulp-sourcemaps')
//webpackConfig = require("./config/webpack.config.vendor")
;

gulp.task("webpack:watch", function () {
    //gulp.watch(["./src/app/**/*"], ["webpack:build"]);
});

gulp.task("sass:watch", function () {
    gulp.watch(["./src/content/scss/**/*.scss"], ["sass:build"]);
});

gulp.task('css:clean', function () {
    return del('./wwwroot/css/**/*.{css,map}');
});

gulp.task('fonts:clean', function () {
    return del('./wwwroot/fonts/**/*.*');
});

gulp.task('img:clean', function () {
    return del('./wwwroot/img/**/*.*');
});

gulp.task('index:clean', function () {
    return del('./wwwroot/index.html');
});

gulp.task('app:clean', function () {
    return del('./wwwroot/js/app.{js,js.map}');
});

gulp.task('polyfills:clean', function () {
    //return del('./wwwroot/js/polyfills.{js,js.map}');
});

gulp.task('vendorjs:clean', function () {
    //return del('./wwwroot/js/vendor.{js,js.map}');
});

gulp.task('clean', ["css:clean", "fonts:clean", "index:clean", "app:clean", "polyfills:clean", "vendorjs:clean", "img:clean"], function () {
});


gulp.task('sass:build', ["css:clean"], function () {
    return gulp
        .src('./src/content/scss/site.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./wwwroot/css'));
});

gulp.task('fonts:build', ["fonts:clean"], function () {
    return gulp.src(['./node_modules/bootstrap-sass/assets/fonts/bootstrap/*.*',
                     './node_modules/font-awesome/fonts/*.*'])
    .pipe(gulp.dest(path.join("wwwroot", '/fonts/')));
});

gulp.task('img:build', ["img:clean"], function () {
    return gulp.src('./src/content/img/**/*.*')
            .pipe(gulp.dest(path.join("wwwroot", '/img/')));
});

gulp.task("index:build", ["index:clean"], function () {
    return gulp.src('./src/index.html')
        /*.pipe(htmlify({}))*/
        .pipe(gulp.dest('./wwwroot'));
});


gulp.task('build', ["sass:build", "fonts:build", "img:build", "index:build"], function () {

});


gulp.task("watch", ["sass:watch"])

gulp.task('default', function () {
    // place code for your default task here
});