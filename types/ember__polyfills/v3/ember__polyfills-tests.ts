import { assign, merge } from "@ember/polyfills";

(() => {
    /* assign */
    assign({}, { a: "b" });
    assign({}, { a: "b" }).a; // $ExpectType string
    assign({ a: 6 }, { a: "b" }).a; // $ExpectType string
    assign({ a: 6 }, {}).a; // $ExpectType number
    // @ts-expect-error
    assign({ b: 6 }, {}).a;
    assign({}, { b: 6 }, {}).b; // $ExpectType number
    assign({ a: "hello" }, { b: 6 }, {}).a; // $ExpectType string
    assign({ a: "hello" }, { b: 6 }, { a: true }).a; // $ExpectType boolean
    // @ts-expect-error
    assign({ a: "hello" }, "", { a: true }).a;
    assign({ d: ["gobias industries"] }, { a: "hello" }, { b: 6 }, { a: true }).d; // $ExpectType string[]
    assign({}, { a: 0 }, { b: 1 }, { c: 2 }, { d: 3 }).a; // $ExpectType any

    // matches Object.assign
    assign({}, null); // $ExpectType never
    assign({}, undefined); // $ExpectType never
})();

(() => {
    /* merge */
    merge({}, { a: "b" });
    merge({}, { a: "b" }).a; // $ExpectType string
    merge({ a: 6 }, { a: "b" }).a; // $ExpectType string
    merge({ a: 6 }, {}).a; // $ExpectType number
    // @ts-expect-error
    merge({ b: 6 }, {}).a;
})();
