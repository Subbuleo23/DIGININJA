import * as UglifyJS from "uglify-js";
import GulpUglify = require(".");

interface Composer {
    (uglify: Uglify, log: Logger): typeof GulpUglify;
}

interface Uglify {
    minify: typeof UglifyJS.minify;
}

interface Logger {
    warn: typeof console.warn;
}

declare const composer: Composer;

export = composer;
