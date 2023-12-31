import gulp = require("gulp");
import sourcemaps = require("gulp-sourcemaps");
import File = require("vinyl");

function plugin1(): NodeJS.ReadWriteStream {
    return null;
}
function plugin2(): NodeJS.ReadWriteStream {
    return null;
}

gulp.task("javascript", function() {
    gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    gulp.src("src/**/*.js")
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    gulp.src(["src/test.js", "src/testdir/test2.js"], { base: "src" })
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write("../maps", { addComment: false }))
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write({ includeContent: false, sourceRoot: "/src" }))
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write({
            includeContent: false,
            sourceRoot: function(file) {
                return "/src";
            },
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write({
            destPath: "../maps",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write({
            sourceMappingURL: function(file: File): string {
                return `${file.basename}.map`;
            },
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write({
            mapFile: function(mapFilePath: string): string {
                return mapFilePath.replace(".js.map", ".map");
            },
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write({
            charset: "utf-8",
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write("../maps", {
            sourceMappingURLPrefix: "https://asset-host.example.com/assets",
        }))
        .pipe(gulp.dest("public/scripts"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write("../maps", {
            sourceMappingURLPrefix: function(file) {
                return "https://asset-host.example.com/assets";
            },
        }))
        .pipe(gulp.dest("public/scripts"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write("../maps", {
            clone: true,
        }))
        .pipe(gulp.dest("public/scripts"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write("../maps", {
            clone: { contents: false },
        }))
        .pipe(gulp.dest("public/scripts"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.mapSources())
        .pipe(gulp.dest("public/scripts"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.mapSources(sourcePah => sourcePah))
        .pipe(gulp.dest("public/scripts"));
});

gulp.task("javascript", function() {
    var stream = gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.mapSources((sourcePah, file) => sourcePah || file.cwd))
        .pipe(gulp.dest("public/scripts"));
});
