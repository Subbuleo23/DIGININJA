import * as Color from "color";

var color: Color.Color = Color("white");
var colorOther: Color.Color = Color("black");

var colorRGB: Color.Color = color.rgb(0, 0, 0);
var colorRGB: Color.Color = color.rgb([0, 0, 0]);
var rgb: Color.RGBColor = color.rgb();

var colorHSL: Color.Color = color.hsl([0, 0, 0]);
var hsl: Color.HSLColor = color.hsl();

var colorHSV: Color.Color = color.hsv([0, 0, 0]);
var hsv: Color.HSVColor = color.hsv();

var colorHBW: Color.Color = color.hbw([0, 0, 0]);
var hbw: Color.HBWColor = color.hbw();

var colorCMYK: Color.Color = color.cmyk([0, 0, 0, 0]);
var cmyk: Color.CMYKColor = color.cmyk();

var hex: string = color.hexString();
var percent: string = color.percentString();
var keyword: string | void = color.keyword();
var alpha: number = color.alpha();
var red: number = color.red();
var green: number = color.green();
var blue: number = color.blue();
var hue: number = color.hue();
var saturation: number = color.saturation();
var lightness: number = color.lightness();
var saturationv: number = color.saturationv();
var value: number = color.value();
var whiteness: number = color.whiteness();
var blackness: number = color.blackness();
var cyan: number = color.cyan();
var magenta: number = color.magenta();
var yellow: number = color.yellow();
var black: number = color.black();
var luminosity: number = color.luminosity();
var contrast: number = color.contrast(colorOther);
var dark: boolean = color.dark();
var light: boolean = color.light();
var level: string = color.level(colorOther);

var chain: Color.Color = color
    .rgb(0, 0, 0)
    .hsl([0, 0, 0])
    .hsv([0, 0, 0])
    .hbw([0, 0, 0])
    .cmyk([0, 0, 0, 0])
    .alpha(0)
    .red(0)
    .green(0)
    .blue(0)
    .hue(0)
    .saturation(0)
    .lightness(0)
    .saturationv(0)
    .value(0)
    .whiteness(0)
    .blackness(0)
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
    .clearer(0)
    .opaquer(0)
    .rotate(0)
    .mix(colorOther, 0)
    .clone();
