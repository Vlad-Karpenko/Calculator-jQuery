const gulp = require('gulp');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const shell = require('gulp-shell');
const minifyCss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const clean = require('gulp-clean');
const jQuery = require('jquery');
const browserSync = require('browser-sync');
const reload = browserSync.reload;


gulp.task("html", function () {
    return gulp.src("./src/index.html")
        .pipe(gulp.dest("./build"))
        .pipe(reload({stream: true}));
});

gulp.task("css", function () {
    return gulp.src("./src/css/**/*.css")
        .pipe(minifyCss())
        .pipe(concat("style.css"))
        .pipe(gulp.dest("./build/css"))
        .pipe(reload({stream: true}))
});


gulp.task("js", function () {
    return gulp.src("./src/js/**/*.js")
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(concat("main.js"))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest("./build/js"))
        .pipe(reload({stream: true}))
});

gulp.task('jquery', function () {
    return gulp.src('node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('./build/js'));

});

gulp.task("fonts", function () {
    return gulp.src("./src/fonts/**/*")
        .pipe(gulp.dest("./build/fonts"));
});


gulp.task("clean", function () {
    return gulp.src("./build")
        .pipe(clean());
});

gulp.task("clear-cache", function () {
    cache.clearAll()
});

gulp.task("build", shell.task([
    "gulp clean",
    "gulp jquery",
    "gulp html",
    "gulp fonts",
    "gulp css",
    "gulp js"
]));

gulp.task("watch", function () {
    gulp.watch("./src/index.html", ["html"]);
    gulp.watch("./src/css/**/*.css", ["css"]);
    gulp.watch("./src/js/**/*.js", ["js"]);

});

gulp.task("browser-sync", function () {
    browserSync({
        startPath: "/",
        server: {
            baseDir: "build"
        },
        notify: false
    });

});

gulp.task("server", function () {
    runSequence("build", "browser-sync", "watch")
});

gulp.task("default", ["build"]);

gulp.task("clear-cache", function () {
    cache.clearAll()
});
