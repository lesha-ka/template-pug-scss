"use strict";

import gulp from "gulp";
import del from "del";

gulp.task("clean", () => {
    return del([
        "./dist/**/*",
        "!./dist/fonts",
        "!./dist/fonts/**"
    ]);
});
