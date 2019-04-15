var gulp = require("gulp");
var uglify = require("gulp-uglify");
var css = require("gulp-clean-css");
var imagemin = require("gulp-imagemin");
var concat = require("gulp-concat");
var webserver = require("gulp-webserver");
var livereload = require("gulp-livereload");

//操作js
gulp.task("scriptMin", () => { //创建任务
    return gulp.src("./src/") //配置路径
        .pipe(concat("./src/js/*.js")) //合并文件
        .pipe(uglify()) //压缩文件
        .pipe(gulp.dest("./dist/")) //导出文件
})

//操作css
gulp.task("cssMin", () => { //创建任务
    return gulp.src("./src/") //配置路径
        .pipe(concat("./src/css/*.css")) //合并文件
        .pipe(css()) //压缩文件
        .pipe(gulp.dest("./dist/")) //导出文件
})

//操作image
gulp.task("imageMin", () => { //创建任务
    return gulp.src("./src/") //配置路径
        .pipe(concat("./src/images/*.jpg")) //合并文件
        .pipe(imagemin()) //压缩文件
        .pipe(gulp.dest("./dist/")) //导出文件
})

//创建服务
gulp.task("webserver", () => {
    return gulp.watch("./src/", {
        open: true,
        port: 8080,
        host: "169.254.191.142",
        livereload: true,
        middlewear: (req, res, next) => {

        }
    })
})