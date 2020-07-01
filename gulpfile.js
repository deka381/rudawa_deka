var gulp = require("gulp");
var sass = require("gulp-sass");
var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "scss/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "css"
    }
};
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");

var browserSync = require("browser-sync").create();

function style() {
      return (
        gulp
            .src(paths.styles.src)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('css'))
            .pipe(browserSync.stream())
    );
}

exports.style = style;

function reload() {
  browserSync.reload();
}
function watch() {
  browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("scss/**/*.scss", style);
    gulp.watch("*.html", reload);
}

exports.watch = watch
