import pify = require("pify");

type CallbackFunction = (...args: any[]) => any;

function assert(actual: string, expected: string): void {
    if (actual !== expected) {
        throw new Error(`${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
    }
}

const fs = {
    readFile: (file: string, callback: CallbackFunction) => {
        let result;

        if (file === "foo.txt") {
            result = "foo";
        } else if (file === "bar.txt") {
            result = "bar";
        }

        callback(undefined, result);
    },
    exists: (path: string, callback: (exists: boolean) => void): void => {
        callback(true);
    },
};

const fsP = pify(fs);
fsP.readFile("foo.txt").then((result: string) => assert(result, "foo"));

pify(fs.readFile)("foo.txt").then((result: string) => assert(result, "foo"));
pify(fs.readFile, { promiseModule: Promise })("bar.txt").then((result: string) => assert(result, "bar"));

pify(fs.exists, { errorFirst: false })("foo.txt").then((result: boolean) => assert(result.toString(), true.toString()));

// include/exclude with multiple entries
const module = {
    f1: (callback: CallbackFunction) => callback(),
    f2: (callback: CallbackFunction) => callback(),
    f3: (callback: CallbackFunction) => callback(),
};

const include = pify(module, { include: ["f1", "f2"] });
if (include.f1 === module.f1) throw new Error();
if (include.f2 === module.f2) throw new Error();
if (include.f3 !== module.f3) throw new Error();

const exclude = pify(module, { exclude: ["f1", "f2"] });
if (exclude.f1 !== module.f1) throw new Error();
if (exclude.f2 !== module.f2) throw new Error();
if (exclude.f3 === module.f3) throw new Error();

(async () => {
    const data = await pify(fs.readFile)("package.json", "utf8");
    const data2 = await pify(fs).readFile("package.json", "utf8");
})();
