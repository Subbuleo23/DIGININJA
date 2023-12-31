import hull = require("hull.js");

const numberPointSet = [
    [236, 126],
    [234, 115],
    [238, 109],
    [247, 102],
];
const biggerNumberPointSet = [
    [162, 332],
    [182, 299],
    [141, 292],
    [158, 264],
    [141, 408],
    [160, 400],
    [177, 430],
    [151, 442],
    [155, 425],
    [134, 430],
    [126, 447],
    [139, 466],
    [160, 471],
    [167, 447],
    [182, 466],
    [192, 442],
    [187, 413],
    [173, 403],
    [168, 425],
    [153, 413],
    [179, 275],
    [163, 292],
    [134, 270],
    [143, 315],
    [177, 320],
    [163, 311],
    [162, 281],
    [182, 255],
    [141, 226],
    [156, 235],
    [173, 207],
    [187, 230],
    [204, 194],
    [165, 189],
    [145, 201],
    [158, 167],
    [190, 165],
    [206, 145],
    [179, 153],
    [204, 114],
    [221, 138],
    [243, 112],
    [248, 139],
    [177, 122],
    [179, 99],
    [196, 82],
    [219, 90],
    [240, 75],
    [218, 61],
    [228, 53],
    [211, 34],
    [197, 51],
    [179, 65],
    [155, 70],
    [165, 85],
    [134, 80],
    [124, 58],
    [153, 44],
    [173, 34],
    [192, 27],
    [156, 19],
    [119, 32],
    [128, 17],
    [138, 36],
    [100, 58],
    [112, 73],
    [100, 92],
    [78, 100],
    [83, 78],
    [61, 63],
    [80, 44],
    [100, 26],
    [60, 39],
    [43, 71],
    [34, 54],
    [32, 90],
    [53, 104],
    [60, 82],
    [66, 99],
    [247, 94],
    [187, 180],
    [221, 168],
];
const objectPointSet = [
    { lng: -0.2067, lat: 51.4911 },
    { lng: -0.207, lat: 51.4915 },
];

hull(numberPointSet);

hull(numberPointSet, 50);

hull(objectPointSet, 50, [".lng", ".lat"]);

hull(biggerNumberPointSet);
