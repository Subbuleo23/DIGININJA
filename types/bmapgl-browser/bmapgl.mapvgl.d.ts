/* *****************************************************************************
Copyright [Junior2ran] [hdr01@126.com]

This project is licensed under the MIT license.
Copyrights are respective of each contributor listed at the beginning of each definition file.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************** */

/// <reference path="./bmapgl.core.d.ts" />
declare namespace MapVGL {
    class View {
        constructor(opts: ViewOptions);
        addLayer(x: Layer): void;
        removeLayer(x: Layer): void;
        destroy(): void;
        getAllLayers(x: Layer): Layer[];
        getAllThreeLayers(x: Layer): Layer[];
    }
    interface ViewOptions {
        map?: object | undefined;
        mapType?: "bmap" | "blank" | "cesium" | undefined;
        effects?: Effects[] | undefined;
    }

    class Layer {
        constructor(map: BMapGL.Map, opts?: LayerOptions);
        setData(x: GeoJSON[]): void;
        setOptions(x: LayerOptions): void;
        getData(): GeoJSON[];
        getOptions(): LayerOptions;
        getDefaultOptions(): LayerOptions;
        destroy(): void;
    }
    interface LayerOptions {
        repeat?: boolean | undefined;
        data?: GeoJSON[] | undefined;
        [x: string]: any;
    }
    interface GeoJSON {
        geometry: {
            type: "Point" | "LineString" | "Polygon";
            coordinates: any[];
        };
        properties?: {
            [x: string]: any;
        } | undefined;
        [x: string]: any;
    }

    class Effects {
        constructor(opts?: object);
    }
}
