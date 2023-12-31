import * as Color from "color";

var color: Color.Color = Color("white");
var colorOther: Color.Color = Color("black");
var colorRGB: Color.Color = Color({ r: 0, g: 0, b: 0 }, "rgb");
var colorInt: Color.Color = Color(0x000000);

var hex: string = color.hex();
var percent: string = color.percentString();
var keyword: string | void = color.keyword();
var alpha: number = color.alpha();
var red: number = color.red();
var green: number = color.green();
var blue: number = color.blue();
var hue: number = color.hue();
var saturationl: number = color.saturationl();
var lightness: number = color.lightness();
var saturationv: number = color.saturationv();
var value: number = color.value();
var cyan: number = color.cyan();
var magenta: number = color.magenta();
var yellow: number = color.yellow();
var black: number = color.black();
var luminosity: number = color.luminosity();
var contrast: number = color.contrast(colorOther);
var dark: boolean = color.dark();
var light: boolean = color.light();
var level: string = color.level(colorOther);

var x: number = color.x();
var y: number = color.y();
var z: number = color.z();
var l: number = color.l();
var a: number = color.a();
var b: number = color.b();
var rgbNumber: number = color.rgbNumber();

var chain: Color.Color = color
    .alpha(0)
    .red(0)
    .green(0)
    .blue(0)
    .hue(0)
    .saturationl(0)
    .lightness(0)
    .saturationv(0)
    .value(0)
    .cyan(0)
    .magenta(0)
    .yellow(0)
    .black(0)
    .negate()
    .lighten(0)
    .darken(0)
    .saturate(0)
    .desaturate(0)
    .greyscale()
    .whiten(0)
    .blacken(0)
    .opaquer(0)
    .rotate(0)
    .mix(colorOther, 0)
    .hsl();
