import d3Cloud = require("d3-cloud");
import d3 = require("d3");

// $ExpectType Cloud<Word>
d3Cloud();

// $ExpectType Cloud<Word>
d3.layout.cloud();

interface ICompTextSize {
    text: string;
    size: number;
    x?: number | undefined;
    y?: number | undefined;
    rotate?: number | undefined;
}

function archimedeanSpiral(size: [number, number]): (t: number) => [number, number] {
    var e = size[0] / size[1];
    return (t: number) => {
        const s = t * 0.1;
        return [e * s * Math.sin(s), s * Math.cos(s)];
    };
}

var fill = d3.scale.category20<number>();
d3.layout
    .cloud()
    .size([300, 300])
    .words(
        ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"].map(function(d: string) {
            return { text: d, size: 10 + Math.random() * 90 };
        }),
    )
    .padding(5)
    .rotate(10)
    .rotate(function() {
        return ~~(Math.random() * 2) * 90;
    })
    .font("Impact")
    .fontSize(10)
    .fontSize(function(d: ICompTextSize) {
        return d.size;
    })
    .spiral("archimedean")
    .spiral(archimedeanSpiral)
    .on("end", draw)
    .random()
    .canvas()
    .start();

function draw(words: ICompTextSize[]) {
    d3.select("body")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300)
        .append("g")
        .attr("transform", "translate(150,150)")
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", function(d: ICompTextSize) {
            return d.size + "px";
        })
        .style("font-family", "Impact")
        .style("fill", function(_d: ICompTextSize, i: number) {
            return fill(i);
        })
        .attr("text-anchor", "middle")
        .attr("transform", function(d: ICompTextSize) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d: ICompTextSize) {
            return d.text;
        });
}
