//////////////////
// Doc Examples
//////////////////

function chart_examples() {
    const chart = c3.generate({
        data: {},
        bindto: "#myContainer",
        size: {
            width: 640,
            height: 480,
        },
        padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
        },
        color: {
            pattern: ["#1f77b4", "#aec7e8"],
        },
        interaction: {
            enabled: false,
        },
        transition: {
            duration: 500,
        },
        oninit: () => {
            /* code*/
        },
        onrendered: () => {
            /* code*/
        },
        onmouseover: () => {
            /* code*/
        },
        onmouseout: () => {
            /* code*/
        },
        onresize: () => {
            /* code*/
        },
        onresized: () => {
            /* code*/
        },
    });

    const chart2 = c3.generate({
        bindto: document.getElementById("myContainer"),
        data: {},
    });

    const chart3 = c3.generate({
        bindto: d3.select("#myContainer"),
        data: {},
    });
}

function data_examples() {
    const chart = c3.generate({
        data: {
            url: "/data/c3_test.csv",
            json: [
                {
                    name: "www.site1.com",
                    upload: 200,
                    download: 200,
                    total: 400,
                },
                {
                    name: "www.site2.com",
                    upload: 100,
                    download: 300,
                    total: 400,
                },
                {
                    name: "www.site3.com",
                    upload: 300,
                    download: 200,
                    total: 500,
                },
                {
                    name: "www.site4.com",
                    upload: 400,
                    download: 100,
                    total: 500,
                },
            ],
            mimeType: "json",
            rows: [
                ["data1", "data2", "data3"],
                [90, 120, 300],
                [40, 160, 240],
                [50, 200, 290],
                [120, 160, 230],
                [80, 130, 300],
                [90, 220, 320],
            ],
            columns: [
                ["data1", 30, 20, 50, 40, 60, 50],
                ["data2", 200, 130, 90, 240, 130, 220],
                ["data3", 300, 200, 160, 400, 250, 250],
            ],
            keys: {
                x: "name", // it's possible to specify 'x' when category axis
                value: ["upload", "download"],
            },
            x: "date",
            xs: {
                data1: "x1",
                data2: "x2",
            },
            xFormat: "%Y-%m-%d %H:%M:%S",
            names: {
                data1: "Data Name 1",
                data2: "Data Name 2",
            },
            classes: {
                data1: "additional-data1-class",
                data2: "additional-data2-class",
            },
            groups: [
                ["data1", "data2"],
                ["data3"],
            ],
            axes: {
                data1: "y",
                data2: "y2",
            },
            type: "bar",
            types: {
                data1: "bar",
                data2: "spline",
            },
            labels: true,
            order: "asc",
            regions: {
                data1: [
                    { start: 1, end: 2, style: "dashed" },
                    { start: 3, label: "Region 2", paddingX: 2, paddingY: 2, vertical: true },
                ],
            },
            color: (color, d) => "#ff0000",
            colors: {
                data1: "#ff0000",
                /* ... */
            },
            hide: true,
            empty: {
                label: {
                    text: "No Data",
                },
            },
            selection: {
                enabled: true,
                grouped: true,
                multiple: true,
                draggable: true,
                isselectable: (d) => true,
            },
            stack: {
                normalize: true,
            },
            onclick: (d, element) => {
                /* code */
            },
            onmouseover: (d) => {
                /* code */
            },
            onmouseout: (d) => {
                /* code */
            },
        },
    });

    const chart2 = c3.generate({
        data: {
            labels: {
                format: (v, id, i, j) => {
                    return "string";
                },
            },
            hide: ["data1"],
            order: (data1, data2) => 0,
        },
    });

    const chart3 = c3.generate({
        data: {
            labels: {
                format: {
                    data1: (v, id, i, j) => {
                        return "string";
                    },
                },
            },
        },
    });
}

function axis_examples() {
    const chart = c3.generate({
        data: {},
        axis: {
            rotated: true,
            x: {
                show: true,
                type: "timeseries",
                localtime: true,
                categories: ["Category 1", "Category 2"],
                tick: {
                    centered: true,
                    format: (x: Date) => x.getFullYear(),
                    culling: false,
                    count: 5,
                    fit: true,
                    values: [1, 2, 4, 8, 16, 32],
                    rotate: 60,
                    outer: false,
                    multiline: true,
                    multilineMax: 2,
                    width: 100,
                },
                max: 100,
                min: -100,
                padding: {
                    left: 0,
                    right: 0,
                },
                height: 20,
                extent: [5, 10],
                label: "Your X Axis",
            },
            y: {
                show: false,
                inner: true,
                type: "linear",
                max: 1000,
                min: 1000,
                inverted: true,
                center: 0,
                label: "Your Y Axis",
                tick: {
                    format: d3.format("$,"),
                    outer: false,
                    values: [100, 1000, 10000],
                    count: 5,
                },
                padding: {
                    top: 100,
                    bottom: 100,
                },
                default: [0, 1000],
            },
            y2: {
                show: true,
                inner: true,
                type: "linear",
                max: 1000,
                min: 1000,
                inverted: true,
                center: 0,
                label: "Your Y2 Axis",
                tick: {
                    format: d3.format("$,"),
                    outer: false,
                    values: [100, 1000, 10000],
                    count: 5,
                },
                padding: {
                    top: 100,
                    bottom: 100,
                },
                default: [0, 1000],
            },
        },
    });

    const chart2 = c3.generate({
        data: {},
        axis: {
            x: {
                tick: {
                    culling: {
                        max: 5,
                    },
                },
                label: {
                    text: "Your X Axis",
                    position: "outer-center",
                },
            },
            y: {
                label: {
                    text: "Your X Axis",
                    position: "outer-middle",
                },
                tick: {
                    format: (d) => "$" + d,
                },
            },
            y2: {
                label: {
                    text: "Your X Axis",
                    position: "outer-middle",
                },
                tick: {
                    format: (d) => "$" + d,
                },
            },
        },
    });
}

function grid_examples() {
    const chart = c3.generate({
        data: {},
        grid: {
            x: {
                show: true,
                lines: [
                    { value: 2, text: "Label on 2" },
                    { value: 5, text: "Label on 5", class: "label-5" },
                    { value: 6, text: "Label on 6", position: "start" },
                ],
            },
            y: {
                show: true,
                lines: [
                    { value: 100, text: "Label on 100" },
                    { value: 200, text: "Label on 200", class: "label-200" },
                    { value: 300, text: "Label on 300", position: "middle" },
                ],
            },
        },
    });
}

function region_examples() {
    const chart = c3.generate({
        data: {},
        regions: [{ axis: "x", start: 1, end: 4, class: "region-1-4" }],
    });
}

function legend_examples() {
    const chart = c3.generate({
        data: {},
        legend: {
            show: true,
            hide: true,
            position: "bottom",
            inset: {
                anchor: "top-left",
                x: 10,
                y: 0,
                step: undefined,
            },
            item: {
                onclick: (id) => {
                    /* code */
                },
                onmouseover: (id) => {
                    /* code */
                },
                onmouseout: (id) => {
                    /* code */
                },
            },
        },
    });

    const chart2 = c3.generate({
        data: {},
        legend: {
            hide: "data1",
            inset: {
                anchor: "top-right",
                x: 20,
                y: 10,
                step: 2,
            },
        },
    });

    const chart3 = c3.generate({
        data: {},
        legend: {
            hide: ["data1", "data2"],
        },
    });
}

function tooltip_examples() {
    const chart = c3.generate({
        data: {},
        tooltip: {
            show: true,
            grouped: true,
            format: {
                title: (x, index) => "Data " + x,
                name: (name, ratio, id, index) => name,
                value: (value, ratio, id, index) => ratio?.toString(),
            },
            position: (data, width, height, element) => {
                return { top: 0, left: 0 };
            },
            contents: (d, defaultTitleFormat, defaultValueFormat, color) => "<p>title</p>", // formatted html as you want
            horizontal: true,
        },
    });
}

function subchart_examples() {
    const chart = c3.generate({
        data: {},
        subchart: {
            show: true,
            size: {
                height: 20,
            },
            onbrush: (domain) => {
                /* code */
            },
            axis: {
                x: {
                    show: true,
                },
            },
        },
    });
}

function zoom_examples() {
    const chart = c3.generate({
        data: {},
        zoom: {
            enabled: false,
            type: "scroll",
            rescale: true,
            extent: [1, 100], // enable more zooming
            onzoom: (domain) => {
                /* code */
            },
            onzoomstart: (event) => {
                /* code */
            },
            onzoomend: (domain) => {
                /* code */
            },
            disableDefaultBehavior: true,
        },
    });
}

function point_examples() {
    const chart = c3.generate({
        data: {},
        point: {
            show: false,
            r: 5,
            focus: {
                expand: {
                    enabled: true,
                    r: 1,
                },
            },
            sensitivity: 35,
            select: {
                r: 3,
            },
        },
    });
}

function line_examples() {
    const chart = c3.generate({
        data: {},
        line: {
            connectNull: true,
            step: {
                type: "step-after",
            },
        },
    });
}

function area_examples() {
    const chart = c3.generate({
        data: {},
        area: {
            zerobased: false,
        },
    });
}

function bar_examples() {
    const chart = c3.generate({
        data: {},
        bar: {
            width: 10,
            zerobased: false,
        },
    });

    const chart2 = c3.generate({
        data: {},
        bar: {
            width: {
                ratio: 0.2,
            },
            zerobased: false,
        },
    });
}

function pie_examples() {
    const chart = c3.generate({
        data: {},
        pie: {
            label: {
                show: false,
                format: (value, ratio, id) => {
                    return d3.format("$")(value);
                },
                threshold: 0.1,
            },
            expand: false,
            padAngle: .1,
        },
    });
}

function donut_examples() {
    const chart = c3.generate({
        data: {},
        donut: {
            label: {
                show: false,
                format: (value, ratio, id) => {
                    return d3.format("$")(value);
                },
                threshold: 0.05,
            },
            expand: false,
            padAngle: .1,
            width: 10,
            title: "Title",
        },
    });
}

function gauge_examples() {
    const chart = c3.generate({
        data: {},
        gauge: {
            label: {
                show: false,
                format: (value, ratio) => {
                    return d3.format("$")(value);
                },
            },
            expand: false,
            min: -100,
            max: 100,
            units: " %",
            width: 10,
            fullCircle: true,
        },
    });
}

function spline_examples() {
    const chart = c3.generate({
        data: {},
        spline: {
            interpolation: {
                type: "monotone",
            },
        },
    });
}

function stanford_examples() {
    const chart = c3.generate({
        data: {},
        stanford: {
            scaleMin: 1,
            scaleMax: 10000,
            scaleWidth: 20,
            scaleFormat: "pow10",
            scaleValues: (minValue, maxValue) => {
                const step = (maxValue - minValue) / 10;
                return d3.range(minValue, maxValue + step, step);
            },
            colors: d3.interpolatePlasma,
            padding: {
                top: 15,
                right: 0,
                bottom: 0,
                left: 0,
            },
            texts: [
                { x: 1, y: 4, content: "my custom text here", class: "text-1-4" },
            ],
            lines: [
                { value_x1: 0, value_y1: 0, value_x2: 65, value_y2: 65, class: "line-0-65" },
            ],
            regions: [
                {
                    points: [ // add points counter-clockwise
                        { x: 0, y: 0 },
                        { x: 40, y: 40 },
                        { x: 0, y: 40 },
                    ],
                    text: (value, percentage) => `Normal Operations: ${value} (${percentage}%)`,
                    opacity: 0.2, // 0 to 1
                    class: "region-triangle-1",
                },
            ],
        },
    });

    const chart1 = c3.generate({
        data: {},
        stanford: {
            scaleFormat: d3.format("d"),
        },
    });

    const chart2 = c3.generate({
        data: {},
        stanford: {
            scaleFormat: (d) => "format",
        },
    });
}

//////////////////
// API tests
/////////////////

function api() {
    const chart = c3.generate({ data: {} });

    chart.element; // $ExpectType HTMLElement

    chart.focus("data1");
    chart.focus(["data1", "data2"]);
    chart.focus();

    chart.defocus("data1");
    chart.defocus(["data1", "data2"]);
    chart.defocus();

    chart.revert("data1");
    chart.revert(["data1", "data2"]);
    chart.revert();

    chart.show("data1");
    chart.show(["data1", "data2"]);
    chart.show();
    chart.show("data1", { withLegend: true });

    chart.hide("data1");
    chart.hide(["data1", "data2"]);
    chart.hide();
    chart.hide("data1", { withLegend: true });

    chart.toggle("data1");
    chart.toggle(["data1", "data2"]);
    chart.toggle();
    chart.toggle("data1", { withLegend: true });

    chart.load({
        data: {},
        url: "http://sample.url",
        json: { x: [0, 1, 2], y: [1, 2, 3] },
        rows: [["a", "b", "c"], [1, 2, 3], [4, 5, 6]],
        columns: [["data1", 100, 200, 150], ["b", 2, 3], ["c", 5, 6]],
        classes: { id1: "class", id2: "class" },
        categories: [["cat1", "cat2"]],
        axes: { id1: "x", id2: "y" },
        colors: { x1: d3.rgb(0, 0, 0), x2: "#000000" },
        type: "bar",
        types: { c1: "area", c2: "spline" },
        unload: ["data2", "data3"],
        done: () => {/* on done */},
    });

    chart.load({
        unload: true,
    });

    chart.unload({
        ids: ["data2", "data3"],
        done: () => {/* on done */},
    });

    chart.flow({
        rows: [["a", "b", "c"], [1, 2, 3], [4, 5, 6]],
        columns: [
            ["x", "2013-01-11", "2013-01-21"],
            ["data1", 500, 200],
            ["data2", 100, 300],
            ["data3", 200, 120],
        ],
        done: () => {
            chart.flow({
                columns: [
                    ["x", "2013-02-11", "2013-02-12", "2013-02-13", "2013-02-14"],
                    ["data1", 200, 300, 100, 250],
                    ["data2", 100, 90, 40, 120],
                    ["data3", 100, 100, 300, 500],
                ],
                length: 0,
            });
        },
    });

    chart.select(["data1"]);
    chart.select(["data1"], [1, 3, 5]);
    chart.select(["data1"], [1, 3, 5], true);

    chart.unselect(["data1"]);
    chart.unselect(["data1"], [1, 3, 5]);

    chart.selected();
    chart.selected("data1");

    chart.transform("bar");
    chart.transform("bar", "data1");
    chart.transform("bar", ["data1", "data2"]);

    chart.groups([["data1", "data2"]]);

    chart.xgrids([
        { value: 1, text: "Label 1" },
        { value: 4, text: "Label 4" },
    ]);

    chart.xgrids.add(
        { value: 4, text: "Label 4" },
    );

    chart.xgrids.add([
        { value: 2, text: "Label 2" },
        { value: 4, text: "Label 4" },
    ]);

    chart.xgrids.remove({ value: 2 });
    chart.xgrids.remove({ class: "grid-A" });
    chart.xgrids.remove();

    chart.ygrids([
        { value: 100, text: "Label 1" },
        { value: 400, text: "Label 4" },
    ]);

    chart.ygrids.add(
        { value: 400, text: "Label 4" },
    );

    // Add new y grid lines
    chart.ygrids.add([
        { value: 200, text: "Label 2" },
        { value: 400, text: "Label 4" },
    ]);

    chart.ygrids.remove({ value: 200 });
    chart.ygrids.remove({ class: "grid-A" });
    chart.ygrids.remove();

    chart.regions([
        { axis: "x", start: 5, class: "regionX" },
        { axis: "y", end: 50, class: "regionY" },
    ]);

    chart.regions.add(
        { axis: "x", start: 5, class: "regionX" },
    );

    chart.regions.add([
        { axis: "x", start: 5, class: "regionX" },
        { axis: "y", end: 50, class: "regionY" },
    ]);

    chart.regions.remove({ classes: ["region-A", "region-B"] });
    chart.regions.remove();

    chart.data("data1");
    chart.data(["data1", "data2"]);
    chart.data();

    chart.data.shown("data1");
    chart.data.shown(["data1", "data2"]);
    chart.data.shown();

    chart.data.values("data1");

    chart.data.names();
    chart.data.names({
        data1: "New Name 1",
        data2: "New Name 2",
    });

    chart.data.colors();
    chart.data.colors({
        data1: "#FFFFFF",
        data2: "#000000",
    });

    chart.data.axes();
    chart.data.axes({
        data1: "y",
        data2: "y2",
    });

    chart.x();
    chart.x([100, 200, 300, 400]);
    chart.x({
        data1: [10, 20, 30, 40],
        data2: [100, 200, 300, 400],
    });

    chart.xs();
    chart.xs({
        data1: [10, 20, 30, 40],
        data2: [100, 200, 300, 400],
    });

    chart.axis.labels({
        x: "New X Axis Label",
        y: "New Y Axis Label",
    });

    chart.axis.min({
        x: -10,
        y: 1000,
        y2: 100,
    });

    chart.axis.max({
        x: 100,
        y: 1000,
        y2: 10000,
    });

    chart.axis.range({
        min: {
            x: -10,
            y: -1000,
            y2: -10000,
        },
        max: {
            x: 100,
            y: 1000,
            y2: 10000,
        },
    });

    chart.axis.types({
        x: "linear",
        y2: "log",
    });

    chart.legend.show("data1");
    chart.legend.show(["data1", "data2"]);
    chart.legend.show();

    chart.legend.hide("data1");
    chart.legend.hide(["data1", "data2"]);
    chart.legend.hide();

    chart.subchart.isShown();
    chart.subchart.show();
    chart.subchart.hide();

    chart.zoom([10, 20]);
    chart.zoom();

    chart.unzoom();

    chart.zoom.enable(true);

    chart.resize({
        height: 640,
        width: 480,
    });

    chart.flush();

    chart.destroy();
}

//////////////////
// Chart tests
/////////////////

function simple_multiple() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
        },
    });

    chart.load({
        columns: [
            ["data1", 230, 190, 300, 500, 300, 400],
        ],
    });

    chart.load({
        columns: [
            ["data3", 130, 150, 200, 300, 200, 100],
        ],
    });

    chart.unload({
        ids: "data1",
    });
}

function timeseries() {
    const chart = c3.generate({
        data: {
            x: "x",
            xFormat: "%Y%m%d", // 'xFormat' can be used as custom format of 'x'
            columns: [
                ["x", "2013-01-01", "2013-01-02", "2013-01-03", "2013-01-04", "2013-01-05", "2013-01-06"],
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 340, 200, 500, 250, 350],
            ],
        },
        axis: {
            x: {
                type: "timeseries",
                tick: {
                    format: "%Y-%m-%d",
                },
            },
        },
    });

    chart.load({
        columns: [
            ["data3", 400, 500, 450, 700, 600, 500],
        ],
    });
}

function chart_spline() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            type: "spline",
        },
    });
}

function simple_xy() {
    const chart = c3.generate({
        data: {
            x: "x",
            columns: [
                ["x", 30, 50, 100, 230, 300, 310],
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 300, 200, 300, 250, 450],
            ],
        },
    });

    chart.load({
        columns: [
            ["data1", 100, 250, 150, 200, 100, 350],
        ],
    });

    chart.load({
        columns: [
            ["data3", 80, 150, 100, 180, 80, 150],
        ],
    });

    chart.unload({
        ids: "data2",
    });
}

function simple_xy_multiple() {
    const chart = c3.generate({
        data: {
            xs: {
                data1: "x1",
                data2: "x2",
            },
            columns: [
                ["x1", 10, 30, 45, 50, 70, 100],
                ["x2", 30, 50, 75, 100, 120],
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 20, 180, 240, 100, 190],
            ],
        },
    });
}

function simple_regions() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
            regions: {
                data1: [{ start: 1, end: 2, style: "dashed" }, { start: 3 }], // currently 'dashed' style only
                data2: [{ end: 3 }],
            },
        },
    });
}

function chart_step() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 300, 350, 300, 0, 0, 100],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            types: {
                data1: "step",
                data2: "area-step",
            },
        },
    });
}

function chart_area() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 300, 350, 300, 0, 0, 0],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            types: {
                data1: "area",
                data2: "area-spline",
            },
        },
    });
}

function chart_area_stacked() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 300, 350, 300, 0, 0, 120],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            types: {
                data1: "area-spline",
                data2: "area-spline",
                // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
            },
            groups: [["data1", "data2"]],
        },
    });
}

function chart_bar() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            type: "bar",
        },
        bar: {
            width: {
                ratio: 0.5, // this makes bar width 50% of length between ticks
            },
            // or
            // width: 100 // this makes bar width 100px
        },
    });

    chart.load({
        columns: [
            ["data3", 130, -150, 200, 300, -200, 100],
        ],
    });
}

function chart_bar_stacked() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", -30, 200, 200, 400, -150, 250],
                ["data2", 130, 100, -100, 200, -150, 50],
                ["data3", -230, 200, 200, -300, 250, 250],
            ],
            type: "bar",
            groups: [
                ["data1", "data2"],
            ],
        },
        grid: {
            y: {
                lines: [{ value: 0 }],
            },
        },
    });

    chart.groups([["data1", "data2", "data3"]]);

    chart.load({
        columns: [["data4", 100, -50, 150, 200, -300, -100]],
    });

    chart.groups([["data1", "data2", "data3", "data4"]]);
}

function chart_scatter() {
    const chart = c3.generate({
        data: {
            xs: {
                setosa: "setosa_x",
                versicolor: "versicolor_x",
            },
            // iris data from R
            columns: [
                [
                    "setosa_x",
                    3.5,
                    3.0,
                    3.2,
                    3.1,
                    3.6,
                    3.9,
                    3.4,
                    3.4,
                    2.9,
                    3.1,
                    3.7,
                    3.4,
                    3.0,
                    3.0,
                    4.0,
                    4.4,
                    3.9,
                    3.5,
                    3.8,
                    3.8,
                    3.4,
                    3.7,
                    3.6,
                    3.3,
                    3.4,
                    3.0,
                    3.4,
                    3.5,
                    3.4,
                    3.2,
                    3.1,
                    3.4,
                    4.1,
                    4.2,
                    3.1,
                    3.2,
                    3.5,
                    3.6,
                    3.0,
                    3.4,
                    3.5,
                    2.3,
                    3.2,
                    3.5,
                    3.8,
                    3.0,
                    3.8,
                    3.2,
                    3.7,
                    3.3,
                ],
                [
                    "versicolor_x",
                    3.2,
                    3.2,
                    3.1,
                    2.3,
                    2.8,
                    2.8,
                    3.3,
                    2.4,
                    2.9,
                    2.7,
                    2.0,
                    3.0,
                    2.2,
                    2.9,
                    2.9,
                    3.1,
                    3.0,
                    2.7,
                    2.2,
                    2.5,
                    3.2,
                    2.8,
                    2.5,
                    2.8,
                    2.9,
                    3.0,
                    2.8,
                    3.0,
                    2.9,
                    2.6,
                    2.4,
                    2.4,
                    2.7,
                    2.7,
                    3.0,
                    3.4,
                    3.1,
                    2.3,
                    3.0,
                    2.5,
                    2.6,
                    3.0,
                    2.6,
                    2.3,
                    2.7,
                    3.0,
                    2.9,
                    2.9,
                    2.5,
                    2.8,
                ],
                [
                    "setosa",
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.4,
                    0.3,
                    0.2,
                    0.2,
                    0.1,
                    0.2,
                    0.2,
                    0.1,
                    0.1,
                    0.2,
                    0.4,
                    0.4,
                    0.3,
                    0.3,
                    0.3,
                    0.2,
                    0.4,
                    0.2,
                    0.5,
                    0.2,
                    0.2,
                    0.4,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.4,
                    0.1,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.1,
                    0.2,
                    0.2,
                    0.3,
                    0.3,
                    0.2,
                    0.6,
                    0.4,
                    0.3,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                ],
                [
                    "versicolor",
                    1.4,
                    1.5,
                    1.5,
                    1.3,
                    1.5,
                    1.3,
                    1.6,
                    1.0,
                    1.3,
                    1.4,
                    1.0,
                    1.5,
                    1.0,
                    1.4,
                    1.3,
                    1.4,
                    1.5,
                    1.0,
                    1.5,
                    1.1,
                    1.8,
                    1.3,
                    1.5,
                    1.2,
                    1.3,
                    1.4,
                    1.4,
                    1.7,
                    1.5,
                    1.0,
                    1.1,
                    1.0,
                    1.2,
                    1.6,
                    1.5,
                    1.6,
                    1.5,
                    1.3,
                    1.3,
                    1.3,
                    1.2,
                    1.4,
                    1.2,
                    1.0,
                    1.3,
                    1.2,
                    1.3,
                    1.3,
                    1.1,
                    1.3,
                ],
            ],
            type: "scatter",
        },
        axis: {
            x: {
                label: "Sepal.Width",
                tick: {
                    fit: false,
                },
            },
            y: {
                label: "Petal.Width",
            },
        },
    });

    chart.load({
        xs: {
            virginica: "virginica_x",
        },
        columns: [
            [
                "virginica_x",
                3.3,
                2.7,
                3.0,
                2.9,
                3.0,
                3.0,
                2.5,
                2.9,
                2.5,
                3.6,
                3.2,
                2.7,
                3.0,
                2.5,
                2.8,
                3.2,
                3.0,
                3.8,
                2.6,
                2.2,
                3.2,
                2.8,
                2.8,
                2.7,
                3.3,
                3.2,
                2.8,
                3.0,
                2.8,
                3.0,
                2.8,
                3.8,
                2.8,
                2.8,
                2.6,
                3.0,
                3.4,
                3.1,
                3.0,
                3.1,
                3.1,
                3.1,
                2.7,
                3.2,
                3.3,
                3.0,
                2.5,
                3.0,
                3.4,
                3.0,
            ],
            [
                "virginica",
                2.5,
                1.9,
                2.1,
                1.8,
                2.2,
                2.1,
                1.7,
                1.8,
                1.8,
                2.5,
                2.0,
                1.9,
                2.1,
                2.0,
                2.4,
                2.3,
                1.8,
                2.2,
                2.3,
                1.5,
                2.3,
                2.0,
                2.0,
                1.8,
                2.1,
                1.8,
                1.8,
                1.8,
                2.1,
                1.6,
                1.9,
                2.0,
                2.2,
                1.5,
                1.4,
                2.3,
                2.4,
                1.8,
                1.8,
                2.1,
                2.4,
                2.3,
                1.9,
                2.3,
                2.5,
                2.3,
                1.9,
                2.0,
                2.3,
                1.8,
            ],
        ],
    });

    chart.unload({
        ids: "setosa",
    });

    chart.load({
        columns: [
            [
                "virginica",
                0.2,
                0.2,
                0.2,
                0.2,
                0.2,
                0.4,
                0.3,
                0.2,
                0.2,
                0.1,
                0.2,
                0.2,
                0.1,
                0.1,
                0.2,
                0.4,
                0.4,
                0.3,
                0.3,
                0.3,
                0.2,
                0.4,
                0.2,
                0.5,
                0.2,
                0.2,
                0.4,
                0.2,
                0.2,
                0.2,
                0.2,
                0.4,
                0.1,
                0.2,
                0.2,
                0.2,
                0.2,
                0.1,
                0.2,
                0.2,
                0.3,
                0.3,
                0.2,
                0.6,
                0.4,
                0.3,
                0.2,
                0.2,
                0.2,
                0.2,
            ],
        ],
    });
}

function chart_pie() {
    const chart = c3.generate({
        data: {
            // iris data from R
            columns: [
                ["data1", 30],
                ["data2", 120],
            ],
            type: "pie",
            onclick: (d, i) => {
                console.log("onclick", d, i);
            },
            onmouseover: (d, i) => {
                console.log("onmouseover", d, i);
            },
            onmouseout: (d, i) => {
                console.log("onmouseout", d, i);
            },
        },
    });

    chart.load({
        columns: [
            [
                "setosa",
                0.2,
                0.2,
                0.2,
                0.2,
                0.2,
                0.4,
                0.3,
                0.2,
                0.2,
                0.1,
                0.2,
                0.2,
                0.1,
                0.1,
                0.2,
                0.4,
                0.4,
                0.3,
                0.3,
                0.3,
                0.2,
                0.4,
                0.2,
                0.5,
                0.2,
                0.2,
                0.4,
                0.2,
                0.2,
                0.2,
                0.2,
                0.4,
                0.1,
                0.2,
                0.2,
                0.2,
                0.2,
                0.1,
                0.2,
                0.2,
                0.3,
                0.3,
                0.2,
                0.6,
                0.4,
                0.3,
                0.2,
                0.2,
                0.2,
                0.2,
            ],
            [
                "versicolor",
                1.4,
                1.5,
                1.5,
                1.3,
                1.5,
                1.3,
                1.6,
                1.0,
                1.3,
                1.4,
                1.0,
                1.5,
                1.0,
                1.4,
                1.3,
                1.4,
                1.5,
                1.0,
                1.5,
                1.1,
                1.8,
                1.3,
                1.5,
                1.2,
                1.3,
                1.4,
                1.4,
                1.7,
                1.5,
                1.0,
                1.1,
                1.0,
                1.2,
                1.6,
                1.5,
                1.6,
                1.5,
                1.3,
                1.3,
                1.3,
                1.2,
                1.4,
                1.2,
                1.0,
                1.3,
                1.2,
                1.3,
                1.3,
                1.1,
                1.3,
            ],
            [
                "virginica",
                2.5,
                1.9,
                2.1,
                1.8,
                2.2,
                2.1,
                1.7,
                1.8,
                1.8,
                2.5,
                2.0,
                1.9,
                2.1,
                2.0,
                2.4,
                2.3,
                1.8,
                2.2,
                2.3,
                1.5,
                2.3,
                2.0,
                2.0,
                1.8,
                2.1,
                1.8,
                1.8,
                1.8,
                2.1,
                1.6,
                1.9,
                2.0,
                2.2,
                1.5,
                1.4,
                2.3,
                2.4,
                1.8,
                1.8,
                2.1,
                2.4,
                2.3,
                1.9,
                2.3,
                2.5,
                2.3,
                1.9,
                2.0,
                2.3,
                1.8,
            ],
        ],
    });

    chart.unload({
        ids: "data1",
    });
    chart.unload({
        ids: "data2",
    });
}

function chart_donut() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30],
                ["data2", 120],
            ],
            type: "donut",
            onclick: (d, i) => {
                console.log("onclick", d, i);
            },
            onmouseover: (d, i) => {
                console.log("onmouseover", d, i);
            },
            onmouseout: (d, i) => {
                console.log("onmouseout", d, i);
            },
        },
        donut: {
            title: "Iris Petal Width",
        },
    });

    chart.load({
        columns: [
            [
                "setosa",
                0.2,
                0.2,
                0.2,
                0.2,
                0.2,
                0.4,
                0.3,
                0.2,
                0.2,
                0.1,
                0.2,
                0.2,
                0.1,
                0.1,
                0.2,
                0.4,
                0.4,
                0.3,
                0.3,
                0.3,
                0.2,
                0.4,
                0.2,
                0.5,
                0.2,
                0.2,
                0.4,
                0.2,
                0.2,
                0.2,
                0.2,
                0.4,
                0.1,
                0.2,
                0.2,
                0.2,
                0.2,
                0.1,
                0.2,
                0.2,
                0.3,
                0.3,
                0.2,
                0.6,
                0.4,
                0.3,
                0.2,
                0.2,
                0.2,
                0.2,
            ],
            [
                "versicolor",
                1.4,
                1.5,
                1.5,
                1.3,
                1.5,
                1.3,
                1.6,
                1.0,
                1.3,
                1.4,
                1.0,
                1.5,
                1.0,
                1.4,
                1.3,
                1.4,
                1.5,
                1.0,
                1.5,
                1.1,
                1.8,
                1.3,
                1.5,
                1.2,
                1.3,
                1.4,
                1.4,
                1.7,
                1.5,
                1.0,
                1.1,
                1.0,
                1.2,
                1.6,
                1.5,
                1.6,
                1.5,
                1.3,
                1.3,
                1.3,
                1.2,
                1.4,
                1.2,
                1.0,
                1.3,
                1.2,
                1.3,
                1.3,
                1.1,
                1.3,
            ],
            [
                "virginica",
                2.5,
                1.9,
                2.1,
                1.8,
                2.2,
                2.1,
                1.7,
                1.8,
                1.8,
                2.5,
                2.0,
                1.9,
                2.1,
                2.0,
                2.4,
                2.3,
                1.8,
                2.2,
                2.3,
                1.5,
                2.3,
                2.0,
                2.0,
                1.8,
                2.1,
                1.8,
                1.8,
                1.8,
                2.1,
                1.6,
                1.9,
                2.0,
                2.2,
                1.5,
                1.4,
                2.3,
                2.4,
                1.8,
                1.8,
                2.1,
                2.4,
                2.3,
                1.9,
                2.3,
                2.5,
                2.3,
                1.9,
                2.0,
                2.3,
                1.8,
            ],
        ],
    });

    chart.unload({
        ids: "data1",
    });
    chart.unload({
        ids: "data2",
    });
}

function chart_gauge() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data", 91.4],
            ],
            type: "gauge",
            onclick: (d, i) => {
                console.log("onclick", d, i);
            },
            onmouseover: (d, i) => {
                console.log("onmouseover", d, i);
            },
            onmouseout: (d, i) => {
                console.log("onmouseout", d, i);
            },
        },
        gauge: {
            label: {
                format: (value, ratio) => value,
                show: false, // to turn off the min/max labels.
            },
            min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
            max: 100, // 100 is default
            units: " %",
            width: 39, // for adjusting arc thickness
        },
        color: {
            pattern: ["#FF0000", "#F97600", "#F6C600", "#60B044"], // the three color levels for the percentage values.
            threshold: {
                unit: "value", // percentage is default
                max: 200, // 100 is default
                values: [30, 60, 90, 100],
            },
        },
        size: {
            height: 180,
        },
    });

    chart.load({
        columns: [["data", 10]],
    });

    chart.load({
        columns: [["data", 50]],
    });

    chart.load({
        columns: [["data", 70]],
    });

    chart.load({
        columns: [["data", 0]],
    });

    chart.load({
        columns: [["data", 100]],
    });
}

function chart_stanford() {
    const chart = c3.generate({
        data: {
            x: "HPE",
            epochs: "Epochs",
            columns: [
                [
                    "HPE",
                    2.5,
                    2.5,
                    2.5,
                    2.5,
                    2.5,
                    3,
                    3,
                    3,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4.5,
                    4.5,
                    4.5,
                    4.5,
                    4.5,
                    4.5,
                    4.5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5.5,
                    5.5,
                    5.5,
                    2,
                    2.5,
                    2.5,
                    3,
                    3,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4.5,
                    4.5,
                    4.5,
                    4.5,
                    4.5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5.5,
                    5.5,
                    2.5,
                    3,
                    3,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4.5,
                    4.5,
                    4.5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5.5,
                    5.5,
                    5.5,
                    5.5,
                    2.5,
                    2.5,
                    2.5,
                    3,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    4,
                    4.5,
                    4.5,
                    4.5,
                    4.5,
                    4.5,
                    5,
                    5,
                    5,
                    5.5,
                    2,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    4,
                    4.5,
                    4.5,
                    4.5,
                    4.5,
                    5,
                    2,
                    2,
                    3,
                    3,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    4,
                    4,
                    4,
                    4,
                    5,
                    2,
                    3,
                    3,
                    3.5,
                    3.5,
                    3.5,
                    3.5,
                    4,
                    4.5,
                    5,
                    5,
                    5,
                    5.5,
                    5.5,
                    2.5,
                    3,
                    3,
                    3,
                    3.5,
                    4,
                    2.5,
                    3,
                    3.5,
                    4,
                    4,
                    4.5,
                    5,
                    3.5,
                    4,
                    4,
                    4,
                    4,
                    4.5,
                    3.5,
                    4,
                    4.5,
                    5,
                    5,
                    2.5,
                    3,
                    3.5,
                    3.5,
                    4,
                    4.5,
                    4.5,
                    4,
                    5,
                    3,
                    4,
                    4,
                    2,
                    4.5,
                    3.5,
                    2.5,
                    3.5,
                    4,
                    4,
                    2.5,
                    2.5,
                    3,
                    3,
                    4,
                    4.5,
                    5,
                    5,
                    4.5,
                    2.5,
                    3,
                    4,
                    3,
                    3.5,
                    3.5,
                    4,
                    2.5,
                    3.5,
                    2.5,
                    3.5,
                    2.5,
                    2.5,
                    3.5,
                    2.5,
                    4.5,
                    3,
                    4,
                    2.5,
                    4.5,
                    2.5,
                    4,
                    4,
                    2.5,
                    3,
                    3.5,
                    2.5,
                    3.5,
                    3.5,
                    3.5,
                    2.5,
                    3.5,
                    3.5,
                    4,
                    4,
                    3.5,
                    4,
                    4,
                    4,
                ],
                [
                    "HPL",
                    24.5,
                    24,
                    27.5,
                    56.5,
                    26.5,
                    26,
                    51.5,
                    50,
                    39,
                    39.5,
                    54,
                    48.5,
                    54.5,
                    53,
                    52,
                    13.5,
                    16.5,
                    15.5,
                    14.5,
                    19,
                    19.5,
                    41,
                    40,
                    42.5,
                    40.5,
                    41.5,
                    30,
                    56,
                    47,
                    11.5,
                    11,
                    12,
                    14.5,
                    55,
                    56.5,
                    54,
                    55.5,
                    56,
                    48.5,
                    19,
                    56,
                    56.5,
                    53.5,
                    51.5,
                    52,
                    31.5,
                    36.5,
                    38.5,
                    22,
                    21,
                    22.5,
                    37,
                    38,
                    38.5,
                    11,
                    55,
                    14.5,
                    12.5,
                    56,
                    22,
                    11,
                    48,
                    12.5,
                    14,
                    17,
                    13.5,
                    43,
                    55.5,
                    53.5,
                    10.5,
                    49.5,
                    54.5,
                    51.5,
                    19.5,
                    24,
                    52.5,
                    49.5,
                    47,
                    45.5,
                    46,
                    20,
                    34.5,
                    37.5,
                    28,
                    10,
                    26.5,
                    22.5,
                    13,
                    18.5,
                    20,
                    29,
                    39.5,
                    48.5,
                    50.5,
                    19.5,
                    29,
                    27.5,
                    52.5,
                    50.5,
                    53,
                    37,
                    36,
                    34.5,
                    20.5,
                    31.5,
                    33,
                    32,
                    36,
                    29,
                    28.5,
                    31.5,
                    29,
                    30,
                    11.5,
                    49,
                    52.5,
                    20.5,
                    49.5,
                    28,
                    24.5,
                    53,
                    50,
                    23.5,
                    47.5,
                    38,
                    35,
                    34,
                    12,
                    21,
                    36.5,
                    51,
                    12,
                    58.5,
                    36.5,
                    28.5,
                    51,
                    50.5,
                    20,
                    50,
                    56,
                    55,
                    29.5,
                    28.5,
                    23,
                    17.5,
                    38.5,
                    57.5,
                    29.5,
                    38.5,
                    49,
                    52.5,
                    34,
                    11.5,
                    27,
                    30,
                    10,
                    51.5,
                    50.5,
                    18,
                    20.5,
                    23,
                    49,
                    51,
                    48,
                    33.5,
                    32.5,
                    27,
                    28,
                    25.5,
                    57.5,
                    10.5,
                    52,
                    29.5,
                    27.5,
                    50,
                    28.5,
                    51.5,
                    21.5,
                    35.5,
                    49.5,
                    37.5,
                    39,
                    50,
                    51,
                    22.5,
                    58,
                    20,
                    25.5,
                    48.5,
                    32,
                    30,
                    24.5,
                    23.5,
                    29.5,
                    23,
                    25,
                    21,
                    38,
                    32.5,
                    12,
                    22,
                    37,
                    55.5,
                    22,
                    38,
                    55.5,
                    29,
                    23.5,
                    21,
                    12.5,
                    14,
                    11.5,
                    56.5,
                    21.5,
                    20.5,
                    33,
                    33.5,
                    27,
                    13,
                    10.5,
                    22.5,
                    57,
                    24,
                    28.5,
                    28,
                    10,
                    37,
                    56,
                    37.5,
                    11,
                    10.5,
                    28,
                    13.5,
                    26,
                    11,
                    27.5,
                    12,
                    26.5,
                    26,
                    24.5,
                    24,
                    25,
                    25,
                    25,
                    11.5,
                    25.5,
                    26.5,
                    26,
                    25.5,
                    27.5,
                    27,
                    25,
                    27,
                    24.5,
                    26,
                    26.5,
                    25.5,
                ],
                [
                    "Epochs",
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    8,
                    8,
                    8,
                    8,
                    8,
                    8,
                    9,
                    9,
                    9,
                    9,
                    9,
                    9,
                    9,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    11,
                    11,
                    11,
                    12,
                    12,
                    13,
                    13,
                    13,
                    13,
                    13,
                    13,
                    13,
                    14,
                    14,
                    15,
                    15,
                    15,
                    16,
                    16,
                    17,
                    18,
                    18,
                    18,
                    18,
                    19,
                    19,
                    19,
                    19,
                    19,
                    20,
                    20,
                    20,
                    22,
                    23,
                    23,
                    23,
                    24,
                    24,
                    24,
                    24,
                    25,
                    28,
                    29,
                    29,
                    36,
                    38,
                    39,
                    43,
                    44,
                    47,
                    50,
                    54,
                    54,
                    59,
                    62,
                    62,
                    70,
                    70,
                    81,
                    84,
                    85,
                    86,
                    88,
                    89,
                    93,
                    94,
                    95,
                    106,
                    110,
                    111,
                    115,
                    170,
                ],
            ],
            type: "stanford",
        },
        legend: {
            hide: true,
        },
        point: {
            focus: {
                expand: {
                    r: 5,
                },
            },
            r: 2,
        },
        axis: {
            x: {
                show: true,
                label: {
                    text: "HPE (m)",
                    position: "outer-center",
                },
                min: 0,
                max: 61,
                tick: {
                    values: d3.range(0, 65, 10),
                },
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                },
            },
            y: {
                show: true,
                label: {
                    text: "HPL (m)",
                    position: "outer-middle",
                },
                min: 0,
                max: 60,
                tick: {
                    values: d3.range(0, 65, 10),
                },
                padding: {
                    top: 5,
                    bottom: 0,
                    left: 0,
                    right: 0,
                },
            },
        },
        stanford: {
            scaleMin: 1,
            scaleMax: 10000,
            scaleFormat: "pow10",
            padding: {
                top: 15,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
    });
}

function chart_combination() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 20, 50, 40, 60, 50],
                ["data2", 200, 130, 90, 240, 130, 220],
                ["data3", 300, 200, 160, 400, 250, 250],
                ["data4", 200, 130, 90, 240, 130, 220],
                ["data5", 130, 120, 150, 140, 160, 150],
                ["data6", 90, 70, 20, 50, 60, 120],
            ],
            type: "bar",
            types: {
                data3: "spline",
                data4: "line",
                data6: "area",
            },
            groups: [["data1", "data2"]],
        },
    });
}

////////////////////
// Axis tests
////////////////////

function categorized() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250, 50, 100, 250],
            ],
        },
        axis: {
            x: {
                type: "category",
                categories: ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7", "cat8", "cat9"],
            },
        },
    });
}

function axes_rotated() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
            types: {
                data1: "bar",
            },
        },
        axis: {
            rotated: true,
        },
    });
}

function axes_y2() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
            axes: {
                data1: "y",
                data2: "y2",
            },
        },
        axis: {
            y2: {
                show: true,
            },
        },
    });
}

function axes_x_tick_format() {
    const chart = c3.generate({
        data: {
            x: "x",
            columns: [
                ["x", "2010-01-01", "2011-01-01", "2012-01-01", "2013-01-01", "2014-01-01", "2015-01-01"],
                ["sample", 30, 200, 100, 400, 150, 250],
            ],
        },
        axis: {
            x: {
                type: "timeseries",
                tick: {
                    format: (x: Date) => x.getFullYear(),
                    // format: '%Y' // format string is also available for timeseries data
                },
            },
        },
    });
}

function axes_x_tick_count() {
    const chart = c3.generate({
        data: {
            x: "x",
            columns: [
                [
                    "x",
                    "2013-01-01",
                    "2013-01-02",
                    "2013-01-03",
                    "2013-01-04",
                    "2013-01-05",
                    "2013-01-06",
                    "2013-01-07",
                    "2013-01-08",
                    "2013-01-09",
                    "2013-01-10",
                    "2013-01-11",
                    "2013-01-12",
                ],
                ["sample", 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250],
            ],
        },
        axis: {
            x: {
                type: "timeseries",
                tick: {
                    count: 4,
                    format: "%Y-%m-%d",
                },
            },
        },
    });
}

function axes_x_tick_values() {
    const chart = c3.generate({
        data: {
            x: "x",
            columns: [
                [
                    "x",
                    "2013-01-01",
                    "2013-01-02",
                    "2013-01-03",
                    "2013-01-04",
                    "2013-01-05",
                    "2013-01-06",
                    "2013-01-07",
                    "2013-01-08",
                    "2013-01-09",
                    "2013-01-10",
                    "2013-01-11",
                    "2013-01-12",
                ],
                ["sample", 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250],
            ],
        },
        axis: {
            x: {
                type: "timeseries",
                tick: {
                    // this also works for non timeseries data
                    values: ["2013-01-05", "2013-01-10"],
                },
            },
        },
    });
}

function axes_x_tick_culling() {
    const chart = c3.generate({
        data: {
            columns: [
                [
                    "sample",
                    30,
                    200,
                    100,
                    400,
                    150,
                    250,
                    30,
                    200,
                    100,
                    400,
                    150,
                    250,
                    30,
                    200,
                    100,
                    400,
                    150,
                    250,
                    200,
                    100,
                    400,
                    150,
                    250,
                ],
            ],
        },
        axis: {
            x: {
                type: "category",
                tick: {
                    culling: {
                        max: 4, // the number of tick texts will be adjusted to less than this value
                    },
                    // for normal axis, default on
                    // for category axis, default off
                },
            },
        },
    });
}

function axes_x_tick_fit() {
    const chart = c3.generate({
        data: {
            x: "x",
            columns: [
                ["x", "2013-10-31", "2013-12-31", "2014-01-31", "2014-02-28"],
                ["sample", 30, 100, 400, 150],
            ],
        },
        axis: {
            x: {
                type: "timeseries",
                tick: {
                    fit: true,
                    format: "%e %b %y",
                },
            },
        },
    });
}

function axes_x_tick_width() {
    const chart = c3.generate({
        data: {
            x: "x",
            columns: [
                ["x", "2013-10-31", "2013-12-31", "2014-01-31", "2014-02-28"],
                ["sample", 30, 100, 400, 150],
            ],
        },
        axis: {
            x: {
                tick: {
                    width: 100,
                },
            },
        },
    });
}

function axes_x_localtime() {
    const chart = c3.generate({
        data: {
            x: "x",
            xFormat: "%Y",
            columns: [
                // ["x", "2012-12-31", "2013-01-01", "2013-01-02", "2013-01-03", "2013-01-04", "2013-01-05"],
                ["x", "2010", "2011", "2012", "2013", "2014", "2015"],
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 340, 200, 500, 250, 350],
            ],
        },
        axis: {
            x: {
                type: "timeseries",
                // if true, treat x value as localtime (Default)
                // if false, convert to UTC internally
                localtime: false,
                tick: {
                    format: "%Y-%m-%d %H:%M:%S",
                },
            },
        },
    });
}

function axes_x_tick_rotate() {
    const chart = c3.generate({
        data: {
            x: "x",
            columns: [
                [
                    "x",
                    "www.somesitename1.com",
                    "www.somesitename2.com",
                    "www.somesitename3.com",
                    "www.somesitename4.com",
                    "www.somesitename5.com",
                    "www.somesitename6.com",
                    "www.somesitename7.com",
                    "www.somesitename8.com",
                    "www.somesitename9.com",
                    "www.somesitename10.com",
                    "www.somesitename11.com",
                    "www.somesitename12.com",
                ],
                ["pv", 90, 100, 140, 200, 100, 400, 90, 100, 140, 200, 100, 400],
            ],
            type: "bar",
        },
        axis: {
            x: {
                type: "category",
                tick: {
                    rotate: 75,
                    multiline: false,
                },
                height: 130,
            },
        },
    });
}

function axes_y_tick_format() {
    const chart = c3.generate({
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 2500]],
        },
        axis: {
            y: {
                tick: {
                    format: d3.format("$,"),
                    // format: (d) => { return "$" + d; }
                },
            },
        },
    });
}

function axes_y_padding() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
            axes: {
                data1: "y",
                data2: "y2",
            },
        },
        axis: {
            y: {
                padding: { top: 200, bottom: 0 },
            },
            y2: {
                padding: { top: 100, bottom: 100 },
                show: true,
            },
        },
    });
}

function axes_y_range() {
    const chart = c3.generate({
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250]],
        },
        axis: {
            y: {
                max: 400,
                min: -400,
                // Range includes padding, set 0 if no padding needed
                // padding: {top:0, bottom:0}
            },
        },
    });
}

function axes_label() {
    const chart = c3.generate({
        data: {
            columns: [
                ["sample", 30, 200, 100, 400, 150, 250],
                ["sample2", 130, 300, 200, 500, 250, 350],
            ],
            axes: {
                sample2: "y2",
            },
        },
        axis: {
            x: {
                label: "X Label",
            },
            y: {
                label: "Y Label",
            },
            y2: {
                show: true,
                label: "Y2 Label",
            },
        },
    });
}

function axes_label_position() {
    const chart = c3.generate({
        data: {
            columns: [
                ["sample1", 30, 200, 100, 400, 150, 250],
                ["sample2", 430, 300, 500, 400, 650, 250],
            ],
            axes: {
                sample1: "y",
                sample2: "y2",
            },
        },
        axis: {
            x: {
                label: {
                    text: "X Label",
                    position: "outer-center",
                    // inner-right : default
                    // inner-center
                    // inner-left
                    // outer-right
                    // outer-center
                    // outer-left
                },
            },
            y: {
                label: {
                    text: "Y Label",
                    position: "outer-middle",
                    // inner-top : default
                    // inner-middle
                    // inner-bottom
                    // outer-top
                    // outer-middle
                    // outer-bottom
                },
            },
            y2: {
                show: true,
                label: {
                    text: "Y2 Label",
                    position: "outer-middle",
                    // inner-top : default
                    // inner-middle
                    // inner-bottom
                    // outer-top
                    // outer-middle
                    // outer-bottom
                },
            },
        },
    });
}

///////////////////
// Data Tests
///////////////////

function data_columned() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 20, 50, 40, 60, 50],
                ["data2", 200, 130, 90, 240, 130, 220],
                ["data3", 300, 200, 160, 400, 250, 250],
            ],
        },
    });
}

function data_rowed() {
    const chart = c3.generate({
        data: {
            rows: [
                ["data1", "data2", "data3"],
                [90, 120, 300],
                [40, 160, 240],
                [50, 200, 290],
                [120, 160, 230],
                [80, 130, 300],
                [90, 220, 320],
            ],
        },
    });
}

function data_json() {
    let chart = c3.generate({
        data: {
            json: {
                data1: [30, 20, 50, 40, 60, 50],
                data2: [200, 130, 90, 240, 130, 220],
                data3: [300, 200, 160, 400, 250, 250],
            },
        },
    });

    setTimeout(() => {
        chart = c3.generate({
            data: {
                json: [
                    {
                        name: "www.site1.com",
                        upload: 200,
                        download: 200,
                        total: 400,
                    },
                    {
                        name: "www.site2.com",
                        upload: 100,
                        download: 300,
                        total: 400,
                    },
                    {
                        name: "www.site3.com",
                        upload: 300,
                        download: 200,
                        total: 500,
                    },
                    {
                        name: "www.site4.com",
                        upload: 400,
                        download: 100,
                        total: 500,
                    },
                ],
                keys: {
                    x: "name", // it's possible to specify 'x' when category axis
                    value: ["upload", "download"],
                },
            },
            axis: {
                x: {
                    type: "category",
                },
            },
        });
    }, 1000);

    setTimeout(() => {
        chart.load({
            json: [
                {
                    name: "www.site1.com",
                    upload: 800,
                    download: 500,
                    total: 400,
                },
                {
                    name: "www.site2.com",
                    upload: 600,
                    download: 600,
                    total: 400,
                },
                {
                    name: "www.site3.com",
                    upload: 400,
                    download: 800,
                    total: 500,
                },
                {
                    name: "www.site4.com",
                    upload: 400,
                    download: 700,
                    total: 500,
                },
            ],
            keys: {
                value: ["upload", "download"],
            },
        });
    }, 2000);
}

function data_url() {
    const chart = c3.generate({
        data: {
            url: "/data/c3_test.csv",
        },
    });

    setTimeout(() => {
        c3.generate({
            data: {
                url: "/data/c3_test.json",
                mimeType: "json",
            },
        });
    }, 1000);
}

function data_stringx() {
    const chart = c3.generate({
        data: {
            x: "x",
            columns: [
                [
                    "x",
                    "www.site1.com",
                    "www.site2.com",
                    "www.site3.com",
                    "www.site4.com",
                ],
                ["download", 30, 200, 100, 400],
                ["loading", 90, 100, 140, 200],
            ],
            groups: [["download", "loading"]],
            type: "bar",
        },
        axis: {
            x: {
                type: "category", // this needed to load string x value
            },
        },
    });

    setTimeout(() => {
        chart.load({
            columns: [
                [
                    "x",
                    "www.siteA.com",
                    "www.siteB.com",
                    "www.siteC.com",
                    "www.siteD.com",
                ],
                ["download", 130, 200, 150, 350],
                ["loading", 190, 180, 190, 140],
            ],
        });
    }, 1000);

    setTimeout(() => {
        chart.load({
            columns: [
                ["x", "www.siteE.com", "www.siteF.com", "www.siteG.com"],
                ["download", 30, 300, 200],
                ["loading", 90, 130, 240],
            ],
        });
    }, 2000);

    setTimeout(() => {
        chart.load({
            columns: [
                [
                    "x",
                    "www.site1.com",
                    "www.site2.com",
                    "www.site3.com",
                    "www.site4.com",
                ],
                ["download", 130, 300, 200, 470],
                ["loading", 190, 130, 240, 340],
            ],
        });
    }, 3000);

    setTimeout(() => {
        chart.load({
            columns: [
                ["download", 30, 30, 20, 170],
                ["loading", 90, 30, 40, 40],
            ],
        });
    }, 4000);

    setTimeout(() => {
        chart.load({
            url: "/data/c3_string_x.csv",
        });
    }, 5000);
}

function data_load() {
    const chart = c3.generate({
        data: {
            url: "/data/c3_test.csv",
            type: "line",
        },
    });

    setTimeout(() => {
        chart.load({
            url: "/data/c3_test2.csv",
        });
    }, 1000);

    setTimeout(() => {
        chart.load({
            columns: [
                ["data1", 130, 120, 150, 140, 160, 150],
                ["data4", 30, 20, 50, 40, 60, 50],
            ],
            unload: ["data2", "data3"],
        });
    }, 2000);

    setTimeout(() => {
        chart.load({
            rows: [
                ["data2", "data3"],
                [120, 300],
                [160, 240],
                [200, 290],
                [160, 230],
                [130, 300],
                [220, 320],
            ],
            unload: "data4",
        });
    }, 3000);

    setTimeout(() => {
        chart.load({
            columns: [["data4", 30, 20, 50, 40, 60, 50, 100, 200]],
            type: "bar",
        });
    }, 4000);

    setTimeout(() => {
        chart.unload({
            ids: "data4",
        });
    }, 5000);

    setTimeout(() => {
        chart.load({
            columns: [["data2", null, 30, 20, 50, 40, 60, 50]],
        });
    }, 6000);

    setTimeout(() => {
        chart.unload();
    }, 7000);

    setTimeout(() => {
        chart.load({
            rows: [
                ["data4", "data2", "data3"],
                [90, 120, 300],
                [40, 160, 240],
                [50, 200, 290],
                [120, 160, 230],
                [80, 130, 300],
                [90, 220, 320],
            ],
            type: "bar",
        });
    }, 8000);

    setTimeout(() => {
        chart.load({
            rows: [
                ["data5", "data6"],
                [190, 420],
                [140, 460],
                [150, 500],
                [220, 460],
                [180, 430],
                [190, 520],
            ],
            type: "line",
        });
    }, 9000);

    setTimeout(() => {
        chart.unload({
            ids: ["data2", "data3"],
        });
    }, 10000);
}

function data_name() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
            names: {
                data1: "Name 1",
                data2: "Name 2",
            },
        },
    });
}

function isDataPoint(d: string | c3.DataPoint | c3.DataSeries): d is c3.DataPoint {
    return typeof d === "object" && "value" in d;
}

function data_color() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 20, 50, 40, 60, 50],
                ["data2", 200, 130, 90, 240, 130, 220],
                ["data3", 300, 200, 160, 400, 250, 250],
            ],
            type: "bar",
            colors: {
                data1: "#ff0000",
                data2: "#00ff00",
                data3: "#0000ff",
            },
            color: (color, d) => {
                // d will be 'id' when called for legends
                if (isDataPoint(d)) {
                    return d.id && d.id === "data3"
                        ? d3.rgb(color).darker(d.value / 150)
                        : color;
                }
                return color;
            },
        },
    });
}

function data_order() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 130, 200, 320, 400, 530, 750],
                ["data2", -130, 10, 130, 200, 150, 250],
                ["data3", -130, -50, -10, -200, -250, -150],
            ],
            type: "bar",
            groups: [["data1", "data2", "data3"]],
            order: "desc", // stack order by sum of values descendantly. this is default.
            //      order: "asc"  // stack order by sum of values ascendantly.
            //      order: null   // stack order by data definition.
        },
        grid: {
            y: {
                lines: [{ value: 0 }],
            },
        },
    });

    setTimeout(() => {
        chart.load({
            columns: [["data4", 1200, 1300, 1450, 1600, 1520, 1820]],
        });
    }, 1000);

    setTimeout(() => {
        chart.load({
            columns: [["data5", 200, 300, 450, 600, 520, 820]],
        });
    }, 2000);

    setTimeout(() => {
        chart.groups([["data1", "data2", "data3", "data4", "data5"]]);
    }, 3000);
}

function data_label() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, -200, -100, 400, 150, 250],
                ["data2", -50, 150, -150, 150, -50, -150],
                ["data3", -100, 100, -40, 100, -150, -50],
            ],
            groups: [["data1", "data2"]],
            type: "bar",
            labels: true,
        },
        grid: {
            y: {
                lines: [{ value: 0 }],
            },
        },
    });
}

function data_label_format() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, -200, -100, 400, 150, 250],
                ["data2", -50, 150, -150, 150, -50, -150],
                ["data3", -100, 100, -40, 100, -150, -50],
            ],
            groups: [["data1", "data2"]],
            type: "bar",
            labels: {
                // format: function (v, id, i, j) { return "Default Format"; },
                format: {
                    data1: d3.format("$"),
                    // data1: function (v, id, i, j) { return "Format for data1"; },
                },
            },
        },
        grid: {
            y: {
                lines: [{ value: 0 }],
            },
        },
    });
}

function data_number_format_l10n() {
    // Locale for Russian (ru_RU)
    const d3locale = d3.formatDefaultLocale({
        decimal: ",",
        thousands: "\u00A0",
        grouping: [3],
        currency: ["", " руб."],
    });
    // More about locale settings: https://github.com/mbostock/d3/wiki/Localization
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30000, 20000, 10000, 40000, 15000, 250000],
                ["data2", 100.5, 1200.46, 100.1, 40.12, 150.1, 250],
            ],
            axes: {
                data2: "y2",
            },
        },
        axis: {
            y: {
                tick: {
                    format: d3locale.format(","),
                },
            },
            y2: {
                show: true,
                tick: {
                    format: d3locale.format(","),
                },
            },
        },
    });
}

///////////////////
// Grid Tests
///////////////////

function options_gridline() {
    const chart = c3.generate({
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250, 120, 200]],
        },
        grid: {
            x: {
                show: true,
            },
            y: {
                show: true,
            },
        },
    });
}

function grid_x_lines() {
    const chart = c3.generate({
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250]],
        },
        grid: {
            x: {
                lines: [
                    { value: 1, text: "Lable 1" },
                    { value: 3, text: "Lable 3", position: "middle" },
                    { value: 4.5, text: "Lable 4.5", position: "start" },
                ],
            },
        },
    });
}

function grid_y_lines() {
    const chart = c3.generate({
        data: {
            columns: [
                ["sample", 30, 200, 100, 400, 150, 250],
                ["sample2", 1300, 1200, 1100, 1400, 1500, 1250],
            ],
            axes: {
                sample2: "y2",
            },
        },
        axis: {
            y2: {
                show: true,
            },
        },
        grid: {
            y: {
                lines: [
                    { value: 50, text: "Label 50 for y" },
                    {
                        value: 1300,
                        text: "Label 1300 for y2",
                        position: "start",
                    },
                    { value: 350, text: "Label 350 for y", position: "middle" },
                ],
            },
        },
    });
}

///////////////////
// Region Tests
///////////////////

function region() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250, 400],
                ["data2", 830, 1200, 1100, 1400, 1150, 1250, 1500],
            ],
            axes: {
                data2: "y2",
            },
        },
        axis: {
            y2: {
                show: true,
            },
        },
        regions: [
            { axis: "x", end: 1, class: "regionX" },
            { axis: "x", start: 2, end: 4, class: "regionX" },
            { axis: "x", start: 5, class: "regionX" },
            { axis: "y", end: 50, class: "regionY" },
            { axis: "y", start: 80, end: 140, class: "regionY" },
            { axis: "y", start: 400, class: "regionY" },
            { axis: "y2", end: 900, class: "regionY2" },
            { axis: "y2", start: 1150, end: 1250, class: "regionY2" },
            { axis: "y2", start: 1300, class: "regionY2" },
        ],
    });
}

function region_timeseries() {
    const chart = c3.generate({
        data: {
            x: "date",
            columns: [
                ["date", "2014-01-01", "2014-01-10", "2014-01-20", "2014-01-30", "2014-02-01"],
                ["sample", 30, 200, 100, 400, 150, 250],
            ],
        },
        axis: {
            x: {
                type: "timeseries",
            },
        },
        regions: [
            { start: "2014-01-05", end: "2014-01-10" },
            { start: new Date("2014/01/15"), end: new Date("20 Jan 2014") },
            { start: 1390575600000, end: 1391007600000 }, // start => 2014-01-25 00:00:00, end => 2014-01-30 00:00:00
        ],
    });
}

/////////////////////
// Interaction Tests
/////////////////////

function options_subchart() {
    const chart = c3.generate({
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250]],
        },
        subchart: {
            show: true,
        },
    });
}

function interaction_zoom() {
    const chart = c3.generate({
        data: {
            columns: [
                [
                    "sample",
                    30,
                    200,
                    100,
                    400,
                    150,
                    250,
                    150,
                    200,
                    170,
                    240,
                    350,
                    150,
                    100,
                    400,
                    150,
                    250,
                    150,
                    200,
                    170,
                    240,
                    100,
                    150,
                    250,
                    150,
                    200,
                    170,
                    240,
                    30,
                    200,
                    100,
                    400,
                    150,
                    250,
                    150,
                    200,
                    170,
                    240,
                    350,
                    150,
                    100,
                    400,
                    350,
                    220,
                    250,
                    300,
                    270,
                    140,
                    150,
                    90,
                    150,
                    50,
                    120,
                    70,
                    40,
                ],
            ],
        },
        zoom: {
            enabled: true,
        },
    });
}

/////////////////////
// Legend Tests
/////////////////////

function options_legend() {
    const chart = c3.generate({
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250]],
        },
        legend: {
            show: false,
        },
    });
}

function legend_position() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
        },
        legend: {
            position: "right",
        },
    });

    setTimeout(() => {
        chart.load({
            columns: [["data3", 130, 150, 200, 300, 200, 100]],
        });
    }, 1000);

    setTimeout(() => {
        chart.unload({
            ids: "data1",
        });
    }, 2000);

    setTimeout(() => {
        chart.transform("pie");
    }, 3000);

    setTimeout(() => {
        chart.transform("line");
    }, 4000);
}

function legend_custom() {
    const chart = c3.generate({
        data: {
            columns: [["data1", 100], ["data2", 300], ["data3", 200]],
            type: "pie",
        },
        legend: {
            show: false,
        },
    });

    function toggle(id: any) {
        chart.toggle(id);
    }

    d3.select(".container")
        .insert("div", ".chart")
        .attr("class", "legend")
        .selectAll("span")
        .data(["data1", "data2", "data3"])
        .enter()
        .append("span")
        .attr("data-id", (id) => id)
        .html((id) => id)
        .each(function(id) {
            d3.select(this).style("background-color", chart.color(id));
        })
        .on("mouseover", (id) => {
            chart.focus(id);
        })
        .on("mouseout", (id) => {
            chart.revert();
        })
        .on("click", (id) => {
            chart.toggle(id);
        });
}

function legend_tiles() {
    const chart = c3.generate({
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250]],
        },
        legend: {
            // amount of padding to put between each legend element
            padding: 5,
            // define custom height and width for the legend item tile
            item: {
                tile: {
                    width: 15,
                    height: 2,
                },
            },
        },
    });
}

/////////////////////
// Tooltip Tests
/////////////////////

function tooltip_show() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
        },
        tooltip: {
            show: false,
        },
    });
}

function tooltip_grouped() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
                ["data3", 500, 320, 210, 340, 215, 125],
            ],
        },
        tooltip: {
            grouped: false, // Default true
        },
    });
}

function tooltip_format() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30000, 20000, 10000, 40000, 15000, 250000],
                ["data2", 100, 200, 100, 40, 150, 250],
            ],
            axes: {
                data2: "y2",
            },
        },
        axis: {
            y: {
                tick: {
                    format: d3.format("s"),
                },
            },
            y2: {
                show: true,
                tick: {
                    format: d3.format("$"),
                },
            },
        },
        tooltip: {
            format: {
                title: (d: any) => "Data " + d,
                value: (value: any, ratio: any, id: any) => {
                    const format = id === "data1" ? d3.format(",") : d3.format("$");
                    return format(value);
                },
                // value: d3.format(",") // apply this format to both y and y2
            },
        },
    });
}

function tooltip_order() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
        },
        tooltip: {
            order: "asc",
        },
    });
}

////////////////////////
// Chart options Tests
////////////////////////

function options_size() {
    const chart = c3.generate({
        size: {
            height: 240,
            width: 480,
        },
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250]],
        },
    });
}

function options_padding() {
    const chart = c3.generate({
        padding: {
            top: 40,
            right: 100,
            bottom: 40,
            left: 100,
        },
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250000000000]],
        },
    });
}

function options_color() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
                ["data3", 130, 220, 140, 200, 250, 450],
                ["data4", 250, 320, 210, 240, 215, 225],
                ["data5", 430, 500, 400, 280, 290, 350],
                ["data6", 100, 120, 310, 340, 415, 225],
            ],
        },
        color: {
            pattern: [
                "#1f77b4",
                "#aec7e8",
                "#ff7f0e",
                "#ffbb78",
                "#2ca02c",
                "#98df8a",
                "#d62728",
                "#ff9896",
                "#9467bd",
                "#c5b0d5",
                "#8c564b",
                "#c49c94",
                "#e377c2",
                "#f7b6d2",
                "#7f7f7f",
                "#c7c7c7",
                "#bcbd22",
                "#dbdb8d",
                "#17becf",
                "#9edae5",
            ],
        },
    });
}

function transition_duration() {
    const chart = c3.generate({
        data: {
            url: "/data/c3_test.csv",
        },
        transition: {
            duration: 100,
        },
    });

    setTimeout(() => {
        chart.load({
            url: "/data/c3_test2.csv",
        });
    }, 500);

    setTimeout(() => {
        chart.load({
            columns: [
                ["data1", 30, 20, 50, 40, 60, 50],
                ["data2", 200, 130, 90, 240, 130, 220],
                ["data3", 300, 200, 160, 400, 250, 250],
            ],
        });
    }, 1000);

    setTimeout(() => {
        chart.load({
            rows: [
                ["data1", "data2", "data3"],
                [90, 120, 300],
                [40, 160, 240],
                [50, 200, 290],
                [120, 160, 230],
                [80, 130, 300],
                [90, 220, 320],
            ],
        });
    }, 1500);

    setTimeout(() => {
        chart.load({
            columns: [["data1", null, 30, 20, 50, 40, 60, 50, 100, 200]],
        });
    }, 2000);
}

/////////////////////////////
// Line Chart options Tests
/////////////////////////////

function point_show() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
        },
        point: {
            show: false,
        },
    });
}

////////////////////////////
// Pie Chart options Tests
////////////////////////////

function pie_label_format() {
    const chart = c3.generate({
        data: {
            columns: [["data1", 30], ["data2", 50]],
            type: "pie",
        },
        pie: {
            label: {
                format: (value: any, ratio: any, id: any) => {
                    return d3.format("$")(value);
                },
            },
        },
    });
}

/////////////////////
// API Tests
/////////////////////

function api_flow() {
    const chart = c3.generate({
        data: {
            x: "x",
            columns: [
                ["x", "2012-12-29", "2012-12-30", "2012-12-31"],
                ["data1", 230, 300, 330],
                ["data2", 190, 230, 200],
                ["data3", 90, 130, 180],
            ],
        },
        axis: {
            x: {
                type: "timeseries",
                tick: {
                    format: "%m/%d",
                },
            },
        },
    });

    setTimeout(() => {
        chart.flow({
            columns: [
                ["x", "2013-01-11", "2013-01-21"],
                ["data1", 500, 200],
                ["data2", 100, 300],
                ["data3", 200, 120],
            ],
            duration: 1500,
            done: () => {
                chart.flow({
                    columns: [
                        [
                            "x",
                            "2013-02-11",
                            "2013-02-12",
                            "2013-02-13",
                            "2013-02-14",
                        ],
                        ["data1", 200, 300, 100, 250],
                        ["data2", 100, 90, 40, 120],
                        ["data3", 100, 100, 300, 500],
                    ],
                    length: 0,
                    duration: 1500,
                    done: () => {
                        chart.flow({
                            columns: [
                                ["x", "2013-03-01", "2013-03-02"],
                                ["data1", 200, 300],
                                ["data2", 150, 250],
                                ["data3", 100, 100],
                            ],
                            length: 2,
                            duration: 1500,
                            done: () => {
                                chart.flow({
                                    columns: [
                                        ["x", "2013-03-21", "2013-04-01"],
                                        ["data1", 500, 200],
                                        ["data2", 100, 150],
                                        ["data3", 200, 400],
                                    ],
                                    to: "2013-03-01",
                                    duration: 1500,
                                });
                            },
                        });
                    },
                });
            },
        });
    }, 1000);
}

function api_data_name() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
            names: {
                data1: "Name 1",
                data2: "Name 2",
            },
        },
    });

    setTimeout(() => {
        chart.data.names({
            data1: "New name for data1",
            data2: "New name for data2",
        });
    }, 1000);

    setTimeout(() => {
        chart.data.names({ data1: "New name for data1 again" });
    }, 2000);
}

function api_data_color() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 20, 50, 40, 60, 50],
                ["data2", 200, 130, 90, 240, 130, 220],
                ["data3", 300, 200, 160, 400, 250, 250],
            ],
            type: "bar",
            colors: {
                data1: "#ff0000",
                data2: "#00ff00",
                data3: "#0000ff",
            },
            labels: true,
        },
    });

    setTimeout(() => {
        chart.data.colors({
            data1: d3.rgb("#ff0000").darker(1),
            data2: d3.rgb("#00ff00").darker(1),
            data3: d3.rgb("#0000ff").darker(1),
        });
    }, 1000);

    setTimeout(() => {
        chart.data.colors({
            data1: d3.rgb("#ff0000").darker(2),
            data2: d3.rgb("#00ff00").darker(2),
            data3: d3.rgb("#0000ff").darker(2),
        });
    }, 2000);
}

function api_axis_label() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
            axes: {
                data1: "y",
                data2: "y2",
            },
        },
        axis: {
            y: {
                label: "Y Axis Label",
            },
            y2: {
                show: true,
                label: "Y2 Axis Label",
            },
        },
    });

    setTimeout(() => {
        chart.axis.labels({ y2: "New Y2 Axis Label" });
    }, 1000);

    setTimeout(() => {
        chart.axis.labels({
            y: "New Y Axis Label",
            y2: "New Y2 Axis Label Again",
        });
    }, 2000);
}

function api_axis_range() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
            axes: {
                data1: "y",
                data2: "y2",
            },
        },
        axis: {
            y2: {
                show: true,
            },
        },
    });

    setTimeout(() => {
        chart.axis.max(500);
    }, 1000);

    setTimeout(() => {
        chart.axis.min(-500);
    }, 2000);

    setTimeout(() => {
        chart.axis.max({ y: 600, y2: 100 });
    }, 3000);

    setTimeout(() => {
        chart.axis.min({ y: -600, y2: -100 });
    }, 4000);

    setTimeout(() => {
        chart.axis.range({ max: 1000, min: -1000 });
    }, 5000);

    setTimeout(() => {
        chart.axis.range({ max: { y: 600, y2: 100 }, min: { y: -100, y2: 0 } });
    }, 6000);

    setTimeout(() => {
        chart.axis.max({ x: 10 });
    }, 7000);

    setTimeout(() => {
        chart.axis.min({ x: -10 });
    }, 8000);

    setTimeout(() => {
        chart.axis.range({ max: { x: 5 }, min: { x: 0 } });
    }, 9000);
}

function api_resize() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
            ],
        },
    });

    setTimeout(() => {
        chart.resize({ height: 100, width: 300 });
    }, 1000);

    setTimeout(() => {
        chart.resize({ height: 200 });
    }, 2000);

    setTimeout(() => {
        chart.resize();
    }, 3000);
}

function api_grid_x() {
    const chart = c3.generate({
        bindto: "#chart",
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250]],
        },
    });

    setTimeout(() => {
        chart.xgrids([
            { value: 1, text: "Label 1" },
            { value: 4, text: "Label 4" },
        ]);
    }, 1000);

    setTimeout(() => {
        chart.xgrids([{ value: 2, text: "Label 2" }]);
    }, 2000);

    setTimeout(() => {
        chart.xgrids.add([{ value: 3, text: "Label 3", class: "hoge" }]);
    }, 3000);

    setTimeout(() => {
        chart.xgrids.remove({ value: 2 });
    }, 4000);

    setTimeout(() => {
        chart.xgrids.remove({ class: "hoge" });
    }, 5000);

    setTimeout(() => {
        chart.xgrids([
            { value: 1, text: "Label 1" },
            { value: 4, text: "Label 4" },
        ]);
    }, 6000);

    setTimeout(() => {
        chart.xgrids.remove();
    }, 7000);
}

/////////////////////
// Transform Tests
/////////////////////

function transform_line() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            type: "bar",
        },
    });

    setTimeout(() => {
        chart.transform("line", "data1");
    }, 1000);

    setTimeout(() => {
        chart.transform("line", "data2");
    }, 2000);

    setTimeout(() => {
        chart.transform("bar");
    }, 3000);

    setTimeout(() => {
        chart.transform("line");
    }, 4000);
}

function transform_spline() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            type: "bar",
        },
    });

    setTimeout(() => {
        chart.transform("spline", "data1");
    }, 1000);

    setTimeout(() => {
        chart.transform("spline", "data2");
    }, 2000);

    setTimeout(() => {
        chart.transform("bar");
    }, 3000);

    setTimeout(() => {
        chart.transform("spline");
    }, 4000);
}

function transform_bar() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            type: "line",
        },
    });

    setTimeout(() => {
        chart.transform("bar", "data1");
    }, 1000);

    setTimeout(() => {
        chart.transform("bar", "data2");
    }, 2000);

    setTimeout(() => {
        chart.transform("line");
    }, 3000);

    setTimeout(() => {
        chart.transform("bar");
    }, 4000);
}

function transform_area() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            type: "bar",
        },
    });

    setTimeout(() => {
        chart.transform("area", "data1");
    }, 1000);

    setTimeout(() => {
        chart.transform("area", "data2");
    }, 2000);

    setTimeout(() => {
        chart.transform("bar");
    }, 3000);

    setTimeout(() => {
        chart.transform("area");
    }, 4000);
}

function transform_areaspline() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
            type: "bar",
        },
    });

    setTimeout(() => {
        chart.transform("area-spline", "data1");
    }, 1000);

    setTimeout(() => {
        chart.transform("area-spline", "data2");
    }, 2000);

    setTimeout(() => {
        chart.transform("bar");
    }, 3000);

    setTimeout(() => {
        chart.transform("area-spline");
    }, 4000);
}

function transform_scatter() {
    const chart = c3.generate({
        data: {
            xs: {
                setosa: "setosa_x",
                versicolor: "versicolor_x",
            },
            // iris data from R
            columns: [
                [
                    "setosa_x",
                    3.5,
                    3.0,
                    3.2,
                    3.1,
                    3.6,
                    3.9,
                    3.4,
                    3.4,
                    2.9,
                    3.1,
                    3.7,
                    3.4,
                    3.0,
                    3.0,
                    4.0,
                    4.4,
                    3.9,
                    3.5,
                    3.8,
                    3.8,
                    3.4,
                    3.7,
                    3.6,
                    3.3,
                    3.4,
                    3.0,
                    3.4,
                    3.5,
                    3.4,
                    3.2,
                    3.1,
                    3.4,
                    4.1,
                    4.2,
                    3.1,
                    3.2,
                    3.5,
                    3.6,
                    3.0,
                    3.4,
                    3.5,
                    2.3,
                    3.2,
                    3.5,
                    3.8,
                    3.0,
                    3.8,
                    3.2,
                    3.7,
                    3.3,
                ],
                [
                    "versicolor_x",
                    3.2,
                    3.2,
                    3.1,
                    2.3,
                    2.8,
                    2.8,
                    3.3,
                    2.4,
                    2.9,
                    2.7,
                    2.0,
                    3.0,
                    2.2,
                    2.9,
                    2.9,
                    3.1,
                    3.0,
                    2.7,
                    2.2,
                    2.5,
                    3.2,
                    2.8,
                    2.5,
                    2.8,
                    2.9,
                    3.0,
                    2.8,
                    3.0,
                    2.9,
                    2.6,
                    2.4,
                    2.4,
                    2.7,
                    2.7,
                    3.0,
                    3.4,
                    3.1,
                    2.3,
                    3.0,
                    2.5,
                    2.6,
                    3.0,
                    2.6,
                    2.3,
                    2.7,
                    3.0,
                    2.9,
                    2.9,
                    2.5,
                    2.8,
                ],
                [
                    "setosa",
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.4,
                    0.3,
                    0.2,
                    0.2,
                    0.1,
                    0.2,
                    0.2,
                    0.1,
                    0.1,
                    0.2,
                    0.4,
                    0.4,
                    0.3,
                    0.3,
                    0.3,
                    0.2,
                    0.4,
                    0.2,
                    0.5,
                    0.2,
                    0.2,
                    0.4,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.4,
                    0.1,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                    0.1,
                    0.2,
                    0.2,
                    0.3,
                    0.3,
                    0.2,
                    0.6,
                    0.4,
                    0.3,
                    0.2,
                    0.2,
                    0.2,
                    0.2,
                ],
                [
                    "versicolor",
                    1.4,
                    1.5,
                    1.5,
                    1.3,
                    1.5,
                    1.3,
                    1.6,
                    1.0,
                    1.3,
                    1.4,
                    1.0,
                    1.5,
                    1.0,
                    1.4,
                    1.3,
                    1.4,
                    1.5,
                    1.0,
                    1.5,
                    1.1,
                    1.8,
                    1.3,
                    1.5,
                    1.2,
                    1.3,
                    1.4,
                    1.4,
                    1.7,
                    1.5,
                    1.0,
                    1.1,
                    1.0,
                    1.2,
                    1.6,
                    1.5,
                    1.6,
                    1.5,
                    1.3,
                    1.3,
                    1.3,
                    1.2,
                    1.4,
                    1.2,
                    1.0,
                    1.3,
                    1.2,
                    1.3,
                    1.3,
                    1.1,
                    1.3,
                ],
            ],
            type: "pie",
        },
        axis: {
            x: {
                label: "Sepal.Width",
                tick: {
                    fit: false,
                },
            },
            y: {
                label: "Petal.Width",
            },
        },
    });

    setTimeout(() => {
        chart.transform("scatter");
    }, 1000);

    setTimeout(() => {
        chart.transform("pie");
    }, 2000);

    setTimeout(() => {
        chart.transform("scatter");
    }, 3000);
}

function transform_pie() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
        },
    });

    setTimeout(() => {
        chart.transform("pie");
    }, 1000);

    setTimeout(() => {
        chart.transform("line");
    }, 2000);

    setTimeout(() => {
        chart.transform("pie");
    }, 3000);
}

function transform_donut() {
    const chart = c3.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50],
            ],
        },
    });

    setTimeout(() => {
        chart.transform("donut");
    }, 1000);

    setTimeout(() => {
        chart.transform("line");
    }, 2000);

    setTimeout(() => {
        chart.transform("pie");
    }, 3000);

    setTimeout(() => {
        chart.transform("donut");
    }, 4000);
}

/////////////////////
// Style Tests
/////////////////////

function style_region() {
    const chart = c3.generate({
        data: {
            columns: [["sample", 30, 200, 100, 400, 150, 250]],
        },
        regions: [{ start: 0, end: 1 }, { start: 2, end: 4, class: "foo" }],
    });
}

function style_grid() {
    const chart = c3.generate({
        data: {
            columns: [["data1", 100, 200, 1000, 900, 500]],
        },
        grid: {
            x: {
                lines: [
                    { value: 2 },
                    { value: 4, class: "grid4", text: "LABEL 4" },
                ],
            },
            y: {
                lines: [
                    { value: 500 },
                    { value: 800, class: "grid800", text: "LABEL 800" },
                ],
            },
        },
    });
}

// set colors via function
c3.generate({
    bindto: "#chart",
    data: {
        columns: [["data1", ...[]]],
        type: "bar",
        colors: {
            data1: (d: any) => {
                return d.value > 90 ? "green" : "orange";
            },
        },
    },
});
