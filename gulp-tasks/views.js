"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";
import beautify from "gulp-html-beautify";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("views", () => {
    const options = {
        indent_size: 4,
    };
    return gulp.src(paths.views.src)
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulpif(production, replace(".css", ".min.css")))
        .pipe(gulpif(production, replace(".js", ".min.js")))
        .pipe(beautify(options))
        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});