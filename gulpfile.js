var gulp = require("gulp")
var cleanCSS = require("gulp-clean-css")
var sass = require("gulp-sass")
var fileinclude = require("gulp-file-include")
var imagemin = require("gulp-imagemin")
var jshint = require("gulp-jshint")
var sourcemaps = require("gulp-sourcemaps")
var browserSync = require("browser-sync").create()
var reload = browserSync.reload
// var connectPHP = require('gulp-connect-php')

//path 路徑
var web = {
    html: ["dev/*.html", "dev/**/*.html"],
    sass: ["dev/sass/*.scss", "dev/sass/**/*.scss"],
    js: ["dev/js/*.js", "dev/js/**/*.*"],
    img: ["dev/img/*.*", "dev/img/**/*.*"],
    font: ["dev/font/*.*", "dev/font/**/*.*"],
}
var options={
    base:'./dest',
    debug:true,

    //路徑如果不同請隱藏別人的路徑 新增自己的路徑 3Q
    //下面是張馨的路徑 
    // bin:'C:/php-7.4.2-nts-Win32-vc15-x64/php.exe',
    // ini:'C:/php-7.4.2-nts-Win32-vc15-x64/php.ini',
     //下面是lilly的路徑
    bin:'/Applications/MAMP/bin/php/php7.4.1/bin/php',
    ini:'/Applications/MAMP/bin/php/php7.4.1/conf/php.ini',
    port:8080,
}

//     //路徑如果不同請隱藏別人的路徑 新增自己的路徑 3Q
//     //下面是張馨的路徑
//     // bin:'C:/php-7.4.2-nts-Win32-vc15-x64/php.exe',
//     // ini:'C:/php-7.4.2-nts-Win32-vc15-x64/php.ini',
//     //下面是lilly的路徑
//     bin: "/Applications/MAMP/bin/php/php7.4.1/bin/php",
//     ini: "/Applications/MAMP/bin/php/php7.4.1/conf/php.ini",
//     port: 8080,
// }

//流程
gulp.task("concatjs", function() {
    gulp.src(web.js).pipe(gulp.dest("dest/js"))
})

gulp.task("img", function() {
    gulp.src(web.img).pipe(gulp.dest("dest/img"))
})

gulp.task("font", function() {
    gulp.src(web.font).pipe(gulp.dest("dest/font"))
})
gulp.task("music", function() {
    gulp.src("dev/music/*.*").pipe(gulp.dest("dest/music"))
})
gulp.task("php", function() {
    gulp.src("dev/*.php").pipe(gulp.dest("dest/"))
})
gulp.task("phpfolder", function() {
    gulp.src("dev/php/*.*").pipe(gulp.dest("dest/php"))
})

//任務串連
gulp.task("concatcss", ["sass"], function() {
    return gulp
        .src("css/*.css")
        .pipe(
            cleanCSS({
                compatibility: "ie9",
            })
        )
        .pipe(gulp.dest("dest/css"))
})

gulp.task("lint", function() {
    return gulp
        .src("./dev/js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
})

gulp.task("sass", function() {
    return (
        gulp
            .src("dev/sass/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass().on("error", sass.logError))
            // .pipe(cleanCSS({compatibility: 'ie9'}))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("dest/css/"))
    )
})

//打包html

gulp.task("fileinclude", function() {
    gulp.src(["dev/*.html"])
        .pipe(
            fileinclude({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(gulp.dest("./dest"))
})

//壓縮圖片
gulp.task("mini_img", function() {
    return gulp
        .src("dev/img/*.*")
        .pipe(imagemin())
        .pipe(gulp.dest("dest/mini_img/"))
})

// gulp.task('watch' , function(){
//   gulp.watch(['sass/*.scss' , 'sass/**/*.scss'], ['concatcss']);
//   gulp.watch('js/*.js', ['concatjs']);
//   gulp.watch(['*.html' , '**/*.html'],  ['fileinclude']);
// });

gulp.task("default", function() {
    // browserSync.init({
    //     server: {
    //         baseDir: "./dest",
    //         proxy:'localhost:8080',
    //         port:3000,
    //         watch:true,
    //         index: "index.html",
    //     },
    // })
    // connectPHP.server(options)
    gulp.watch(web.html, ["fileinclude"]).on("change", reload)
    gulp.watch(web.sass, ["sass"]).on("change", reload)
    gulp.watch(web.js, ["concatjs"]).on("change", reload)
    // gulp.watch(web.js, ['lint']).on('change', reload);
    gulp.watch(web.img, ["img"]).on("change", reload)
    gulp.watch(web.font, ["font"]).on("change", reload)
    gulp.watch(web.php, ["concatphp"]).on("change", reload)
    // gulp.watch(web.music, ['music'].on('change'), reload)
})
