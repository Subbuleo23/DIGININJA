import EmberObject from "@ember/object";
import { assertType } from "./lib/assert";

class Foo extends EmberObject {
    hello() {
        return "world";
    }
    protected bar() {
        return "bar";
    }
    private baz() {
        return "baz";
    }
}
const f = new Foo();
assertType<string>(f.hello());
// @ts-expect-error
assertType<string>(f.bar());
// @ts-expect-error
assertType<string>(f.baz());

// TODO: enable after TS 3.0 https://github.com/typed-ember/ember-cli-typescript/issues/291
// class Foo2 extends EmberObject.extend({
//     bar: ''
// }) {
//     hello() { return 'world'; }
//     protected bar() { return 'bar'; } // @ts-expect-error
//     private baz() { return 'baz'; }
// }
