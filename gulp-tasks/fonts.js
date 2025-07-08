"use strict";

import gulp from "gulp";
import del from "del";
import debug from "gulp-debug";
/* import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2"; */
import { paths } from "../gulpfile.babel";

gulp.task("fonts:clean", () => {
    return del([
        `${paths.fonts.dist}**/*`
    ]);
});

gulp.task("fonts:copy", () => {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dist))
        .pipe(debug({ title: "Copied fonts:" }));
});

gulp.task("fonts:convert", () => {
    return gulp.src("./src/fonts/**/*.ttf")
        .pipe(ttf2woff())
        .pipe(gulp.dest(paths.fonts.dist))
        .pipe(debug({ title: "Converted TTF→WOFF:" }))
        .pipe(gulp.src("./src/fonts/**/*.ttf"))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(paths.fonts.dist))
        .pipe(debug({ title: "Converted TTF→WOFF2:" }));
});


gulp.task("fonts", gulp.series(
    "fonts:clean",
    "fonts:copy",
    /* "fonts:convert" */
));
