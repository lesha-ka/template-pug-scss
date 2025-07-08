import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import webp from "gulp-webp";
import newer from "gulp-newer";
import debug from "gulp-debug";
import browsersync from "browser-sync";

gulp.task("webp", () => {
    return gulp.src(paths.images.src)
        .pipe(newer({
            dest: paths.images.dist,
            ext: '.webp'
        }))
        .pipe(webp())
        .pipe(gulp.dest(paths.images.dist))
        .pipe(debug({ title: "WebP Images" }))
        .on("end", browsersync.reload);
});
