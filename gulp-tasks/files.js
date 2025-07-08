"use strict";

import gulp from "gulp";
import debug from "gulp-debug";
import { paths } from "../gulpfile.babel";

gulp.task("files", () => {
    return gulp.src(paths.files.src)
        .pipe(gulp.dest(paths.files.dist))
        .pipe(debug({ title: "Copied files:" }));
});
