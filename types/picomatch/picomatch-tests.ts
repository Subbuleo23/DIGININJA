import pm = require("picomatch");

new RegExp(/a/);
// main function
const isMatch = pm("*.!(*a)");
isMatch("abcd");

// main function with state
const isMatch2 = pm("*.!(*a)", {}, true);
// $ExpectType boolean
isMatch2.state.negated;

// $ExpectType boolean
isMatch("abcd");

const testResult = pm.test("foo/bar", /^(?:([^/]*?)\/([^/]*?))$/);
// $ExpectType boolean
testResult.isMatch;
// $ExpectType string
testResult.output;

// $ExpectType boolean
pm.matchBase("foo/bar.js", "*.js");
// $ExpectType boolean
pm.matchBase("foo/bar.js", "*.js", {});

// $ExpectType boolean
pm.isMatch("a.a", ["b.*", "*.a"]);
// $ExpectType boolean
pm.isMatch("a.a", "b.*");

pm.parse("pattern");
pm.parse("pattern", {});

pm.scan("!./foo/*.js");

const state = pm.parse("*.js");
pm.compileRe(state);
pm.toRegex(state.output);
pm.toRegex(state.output, {
    debug: true,
    flags: "g",
    nocase: true,
});

pm.scan("!./foo/*.js", { tokens: true });

pm.makeRe("foo/*.js").test("foo/bar.js");
pm.makeRe("foo/{01..25}/bar", {
    expandRange(a, b) {
        return `(<fill-range output>)`;
    },
});

const isMatchWithIgnore = pm("*.!(*a)", { ignore: "single-string" });
const isMatchWithMultipleIgnores = pm("*.!(*a)", { ignore: ["many", "strings"] });

const picoConstansts = pm.constants.globChars(true /* is windows */);
picoConstansts.SLASH_LITERAL; // $ExpectType string
picoConstansts.DOT_LITERAL; // $ExpectType string
