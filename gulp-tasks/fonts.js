"use strict";

import gulp from "gulp";
import del from "del";
import debug from "gulp-debug";
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

gulp.task("fonts", gulp.series(
    "fonts:clean",
    "fonts:copy",
));