import Helper, { helper } from "@ember/component/helper";
import { assertType } from "./lib/assert";

class Timestamp extends Helper {
    timer?: ReturnType<typeof setInterval> | undefined;
    now = new Date();
    init() {
        super.init();
        this.timer = setInterval(() => {
            this.set("now", new Date());
            this.recompute();
        }, 100);
    }
    willDestroy() {
        clearInterval(this.timer);
    }
}

const addHelper = helper(function add([a, b]: number[]) {
    return a + b;
});

const dasherizeHelper = helper(function dasherize([str]: string[], { delim = "-" }) {
    return str.split(/[\s\n\_\.]+/g).join(delim);
});
