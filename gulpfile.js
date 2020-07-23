// 🎄🎄🎄🎄🎄🎄🤶🎄🎄🎄🎄🎄🎄
// 1. Déclaration des variables
// 🎄🎄🎄🎄🎄🎄🎅🎄🎄🎄🎄🎄🎄
let gulp                = require('gulp');
let sass                = require('gulp-sass');
let rename              = require('gulp-rename');
let autoprefixer        = require('gulp-autoprefixer');
let browserSync         = require('browser-sync').create();
let uglify              = require('gulp-uglify');

// 🎄🎄🎄🤶🎄🎄🎄
// 2. Mes tâches
// 🎄🎄🎄🎅🎄🎄🎄

// SASS
gulp.task('sassification', function() {
    return gulp.src('dev/css/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(rename(function (path) {
        path.basename += ".min";
    }))
    .pipe(autoprefixer({
        cascade:false
    }))
    .pipe(gulp.dest('prod/css'));
});

// HTML
gulp.task('htmlification', function () {
    return gulp.src('dev/*.html')
        .pipe(gulp.dest('prod/'));
});

// JSIFICATION
gulp.task('jsification', function () {
    gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
        path.basename += ".min";
    }))
    .pipe(gulp.dest('prod/js/'))
});

// LIVE RELOAD
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "prod/"
        }
    });
});

// 🎄🎄🎄🎄🎄🤶🎄🎄🎄🎄🎄
// 3. Exécution des tâches
// 🎄🎄🎄🎄🎄🎅🎄🎄🎄🎄🎄
gulp.task('observe', gulp.parallel('browser-sync','jsification', 'htmlification','sassification', function() {
    gulp.watch('dev/css/**/*.scss', gulp.series('sassification'));
    gulp.watch('dev/*.html', gulp.series('htmlification'));
    gulp.watch('dev/js/*.js', gulp.series('jsification'));
    gulp.watch('prod/**/*').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('observe'));