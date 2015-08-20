var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");

gulp.slurped = false;

gulp.task("default", function(){
	gulp.src("fang.js")
	.pipe(plumber())
	.pipe(uglify())
	.pipe(rename("fang.min.js"))
	.pipe(gulp.dest("./"))

	if(!gulp.slurped) gulp.watch(["fang.js"], ["default"]);
	gulp.slurped = true;
});
